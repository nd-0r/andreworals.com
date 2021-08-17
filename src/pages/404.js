import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/404.css"

const NotFoundPage = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "/toh.js";
    script.async = true;
  
    document.head.appendChild(script);
  
    return () => {
      document.head.removeChild(script);
    }
  }, []);

  return (
    <Layout pageTitle="Not Found">
      <h1>Page not found!</h1>
      <p>Would you like to play a game?</p>
      <div dangerouslySetInnerHTML={{__html: `
        <div class="container">
          <canvas id="toh"></canvas>
          <button id="start-btn" onclick="init();">Start</button>
          <div class="btn-container">
            <button class="btn" onclick="incrementNumDisks();">
              <div id="up-arrow" class="arrow"></div>
            </button>
            <button class="btn" onclick="decrementNumDisks();">
              <div id="down-arrow" class="arrow"></div>
            </button>
            <button class="btn" onclick="solve();">
              Solve!
            </button>
            <button class="btn" onclick="reset(); draw();">
              Reset
            </button>
          </div>
        </div>
      `}}></div>
      <p style={{textAlign: 'center'}}>Go <Link to='/'>home</Link></p>
    </Layout>
  )
}

export default NotFoundPage
