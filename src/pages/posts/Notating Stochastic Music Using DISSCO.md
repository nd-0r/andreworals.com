---
path: "/blog/notating_stochastic_music_using_dissco"
date: 2021-08-05T01:56:21.32Z
title: "Notating Stochastic Music with DISSCO"
thumbnail: "dissco_tree.png"
draft: true
blog: true
---

This past summer, I interned with NCSA at U of I and worked on a project notating stochastic (random) music. The project revolved around a piece of software called DISSCO, or the Digital Instrument for Sound Synthesis and Composition, managed and originally developed by [Dr. Sever Tipei](http://cmp.music.illinois.edu/people/tipei/index.html). I had a great time working on this project and it gave me an opportunity to solve an interesting problem, learn how to navigate a huge codebase, write documentation :grimacing: and level-up my c++ :nerd:. Here's a brief overview of what I did (which is detailed in this [paper](/AndrewOralsFinalReport.pdf) and [presentation](https://www.youtube.com/watch?v=20JLKKQ6odk)) and my thoughts.

## What is DISSCO?

[DISSCO](https://github.com/tipei/DISSCO-2.0.2) is software for computer-assisted algorithmic composition. It is essentially a black-box function that takes in an XML file defining parameters of a composition, performs computations based on these parameters, and then outputs the score as either a sound file or a written score in western notation. The overarching concept is that the person and the computer work together to create a composition, where the human contributes their skill in making artistic decisions, while the computer contributes its "skill" in performing computations quickly. Although you can make deterministic music with DISSCO, it leans heavily towards compositions whose parameters are modulated with a degree of randomness.

## The problem

There are three parts to DISSCO: the GUI for making the XML files, the composition module, and then the additive synthesis module. I was mostly concerned with the composition module (CMOD), because this is what performs the computations for the piece. 

### DISSCO's Event Structure

Internally, CMOD stores the entire piece as a tree, where the nodes are `Event` objects and the leaves are `Note` objects to be synthesized or notated. The only rules are that the topmost event must represent the piece as a whole, there must be at least one bottom event, and child events may only be placed inside their parent's duration. This tree structure represents the piece in layers of abstraction, where the "Top" event represents the piece as a whole, while, for example, its child might represent movements of the piece, and its child might represent sections of the movement, all the way down to the lowest level of abstraction, which could represent a melody or a chord. 

![DISSCO Tree](../../images/dissco_tree.png)

Fundamentally, an event has a start time in seconds relative to the beginning of the piece, a duration in seconds, sometimes a `Tempo`, and then its children, which are also events or a subclass of `Event`, `Bottom`. This structure lends itself naturally to sound synthesis, however not so much to human performance. Unfortunately, most humans don't play music from timestamps; instead, people play music by subdividing and combining units of time in ratios. Then, in order to notate DISSCO's events, there needs to be some concept of discrete positioning on an evenly spaced grid. This is where the EDU comes in.

### EDU's

![EDUs](../../images/edus.png)

The EDU (Elementary Displacement Unit) is the basic unit of time in an exact "section" of a DISSCO piece. Exact events additionally have a start time and duration in EDU's, along with a tempo defining the number of EDU's per beat, the number of beats per measure, and also the number of beats per a unit of time (maybe a minute). Any exact children of an exact event inherit the tempo, so this creates an exact "section," which is what can be notated. There are a whole bunch of rules about what happens with different combinations of exact and inexact events, but what matters is that only exact sections which trickle all the way down the tree and produce exact leaves make it into the notated score.

### Previous work

The problem is then notating these discretely-positioned events. Previous work developed reliable methods of notating single musical lines with a uniform tempo and time signature. However, it only functioned on a specific case of compositions, where the top event was exact and this exactness then trickled down through the whole tree, making the tempo implicitly uniform. The previous implementation also had some serious [zombie code](https://techbeacon.com/app-dev-testing/zombie-code-when-maintainability-goes-out-window) red flags:

- all of the notation functionality was implemented as static functions in the `Note` class
- the temporary score data for notation was stored in the global namespace
- there was very little documentation, most of which was misleading or outdated
- tests? :grimacing:

## Goals

My tasks seemed pretty simple:

1. Implement and test functionality for notating multiple exact sections separated by other events
2. Improve the documentation and modularity of the notation functionality

## Refactoring the Notation Module

Before implementing new functionality I completely refactored the notation module to leverage object-oriented design and 
