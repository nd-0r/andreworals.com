var canvas;
var ctx;
var towers;
var num_moves;
var target_moves;
var num_disks;
var won;
var solving;

const kLineWidth = 15;
const kDiskWidth = 25;
const kMaxDisks = 18;
const kMinDiskWidth = 50;

var drag_source_rod;
var dragging_disk;
var drag_offset_x;
var drag_offset_y;

function init() {
  window.addEventListener('mousedown', this.handleMouseDownEvent, false);
  window.addEventListener('mouseup', this.handleMouseUpEvent, false);
  window.addEventListener('touchstart', this.handleMouseDownEvent, false);
  window.addEventListener('touchend', this.handleMouseUpEvent, false);
  window.addEventListener('resize', this.resize, false);
  document.getElementById('start-btn').style.visibility = 'hidden';
  for (element of document.getElementsByClassName('btn')) {
    element.style.visibility = 'visible';
  }
  canvas = document.getElementById('toh');
  canvas.width = Math.min(window.innerWidth, 800);
  canvas.height = Math.min(window.innerHeight - 10, 500);
  ctx = canvas.getContext('2d');
  num_disks = 3;
  drag_source_rod = -1;
  solving = false;

  reset();
  draw();
}

function reset() {
  if (!solving) {
    towers = [[], [], []];
    won = false;
    solving = false;
    num_moves = 0;
    target_moves = Math.pow(2, num_disks) - 1;
    createDisks();
  }
}

function calcMouseCoords(e) {
  return ({
    x: e.pageX - canvas.getBoundingClientRect().left,
    y: e.clientY - canvas.getBoundingClientRect().top
  })
}

function handleMouseDownEvent(e) {
  if (!won && !solving) {
    for (let i = 0; i < 3; i++) {
      var mouse_pos_x = calcMouseCoords(e).x;
      var mouse_pos_y = calcMouseCoords(e).y;
      if (towers[i].length > 0) {
        var top_disk = towers[i][towers[i].length - 1];
        if (mouse_pos_x > top_disk.pos_x && mouse_pos_x < (top_disk.pos_x + top_disk.width) &&
            mouse_pos_y > top_disk.pos_y && mouse_pos_y < (top_disk.pos_y + top_disk.height)) {
          console.log("Here!");
          drag_source_rod = i;
          dragging_disk = top_disk;
          drag_offset_x = mouse_pos_x - top_disk.pos_x;
          drag_offset_y = mouse_pos_y - top_disk.pos_y;
          window.addEventListener('mousemove', this.drawMoving, false);
          window.addEventListener('touchmove', this.drawMoving, false);
          return;
        }
      }
    }
  }
}

function handleMouseUpEvent(e) {
  if (!won && !solving && drag_source_rod >= 0) {
    for (let i = 0; i < 3; i++) {
      var mouse_pos_x = calcMouseCoords(e).x;
      var mouse_pos_y = calcMouseCoords(e).y;
      if (mouse_pos_x > (i + 1) * (canvas.width / 16) + i * (canvas.width / 4) &&
          mouse_pos_x < (i + 1) * (canvas.width / 16) + (i + 1) * (canvas.width / 4) &&
          mouse_pos_y > canvas.height - 2 * kLineWidth - canvas.height / 2 &&
          mouse_pos_y < canvas.height - 2 * kLineWidth) {
        move(drag_source_rod, i);
      }
    }
    window.removeEventListener('mousemove', this.drawMoving, false);
    window.removeEventListener('touchmove', this.drawMoving, false);
    drag_source_rod = -1;
    draw();
  }
}

function handleTouchEvent(e) {

}

function move(source, destination) {
  if (source < 0 || source > 2 || 
      destination < 0 || destination > 2 || 
      destination === source) {
    return false;
  }

  if (towers[destination].length > 0 && 
      towers[source][towers[source].length - 1].index > 
      towers[destination][towers[destination].length - 1].index) {
    return false;
  }

  towers[destination].push(towers[source].pop());
  num_moves++;
  if (num_moves === target_moves && towers[2].length === num_disks) {
    won = true;
    solving = false;
  }
  draw();
  return true;
}

function incrementNumDisks() {
  if (!solving && num_disks && num_disks < kMaxDisks) {
    num_disks++;
  }
  reset();
  draw();
}

function decrementNumDisks() {
  if (!solving && num_disks && num_disks > 2) {
    num_disks--;
  }
  reset();
  draw();
}

function createDisks() {
  for (let i = num_disks - 1; i >= 0; i--) {
    var disk_width = i * ((canvas.width / 4) - kMinDiskWidth) / 
                     num_disks + kMinDiskWidth;
    towers[0].push({
      index: i,
      rod: 0,
      pos_x: 0,
      pos_y: 0,
      width: disk_width,
      height: kDiskWidth,
      color: `hsl(${230 * i}, 90%, 60%)`
    });
  }
}

function resize() {
  canvas.width = Math.min(window.innerWidth, 800);
  canvas.height = Math.min(window.innerHeight - 10, 400);
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000000";
  ctx.font = '24px sans serif';
  ctx.fillText(`Moves: ${num_moves}`, 15, 30);
  drawRodsAndDisks();
  if (won) {
    ctx.fillStyle = "#51fa8a";
    ctx.font = '56px sans serif';
    ctx.fillText("You Win!", canvas.width / 2 - 110, canvas.height / 4);
  }
}

function drawMoving(e) {
  draw();
  ctx.fillStyle = dragging_disk.color;
  let mouse_pos_x = calcMouseCoords(e).x;
  let mouse_pos_y = calcMouseCoords(e).y;
  ctx.fillRect(
    mouse_pos_x - drag_offset_x,
    mouse_pos_y - drag_offset_y,
    dragging_disk.width,
    dragging_disk.height
  )
}

function drawRodsAndDisks() {
  const kBaseWidth = canvas.width / 4;
  const kBaseSeparator = canvas.width / 16;
  const kRodHeight = canvas.height / 2;

  for (let i = 0; i < 3; i++) {
    ctx.fillStyle = "#7a4a37";
    var pos_x = (i + 1) * kBaseSeparator + i * kBaseWidth
    ctx.fillRect( // Draw the base
      pos_x,
      canvas.height - 2 * kLineWidth,
      kBaseWidth,
      kLineWidth
    );
    ctx.fillRect( // Draw the rod
      pos_x + (kBaseWidth / 2) - (kLineWidth / 2),
      canvas.height - 2 * kLineWidth - kRodHeight,
      kLineWidth,
      kRodHeight
    )

    for (let j = 0; j < towers[i].length; j++) {
      if (!(i === drag_source_rod && j == towers[i].length - 1)) { // don't draw the source while moving
        ctx.fillStyle = towers[i][j].color;
        towers[i][j].pos_x = pos_x + kBaseWidth / 2 - towers[i][j].width / 2;
        towers[i][j].pos_y = canvas.height - 2 * kLineWidth - (j + 1) * kDiskWidth;
        ctx.fillRect(
          towers[i][j].pos_x,
          towers[i][j].pos_y,
          towers[i][j].width,
          towers[i][j].height
        )
      }
    }
  }
}

// Solver

function solve() {
  solving = true;
  moveNDisksRecursively(num_disks, 0, 2, 1);
}

function moveNDisksRecursively(n, source_idx, destination_idx, temp_idx) {
  if (n === 1) {
    setTimeout(() => { move(source_idx, destination_idx); }, 1000 / num_disks);
  } else {
    moveNDisksRecursively(n - 1, source_idx, temp_idx, destination_idx);
    setTimeout(() => { move(source_idx, destination_idx); }, 1000 / num_disks);
    moveNDisksRecursively(n - 1, temp_idx, destination_idx, source_idx);
  }
}