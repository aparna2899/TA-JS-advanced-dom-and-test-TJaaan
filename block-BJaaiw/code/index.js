let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let paddleHeight = 15;
let paddleWidth = 200;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;

let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 110;
let brickHeight = 40;
let brickPadding = 25;
let brickOffsetTop = 50;
let brickOffsetLeft = 350;
let score = 0;
let lives = 3;

let c = canvas.getContext("2d");
c.fillStyle = '#0395DD';

let bricks = [];
for(let i=0; i<brickColumnCount; i++) {
    bricks[i] = [];
    for(let r=0; r<brickRowCount; r++) {
        bricks[i][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawBricks() {
    for(let i=0; i<brickColumnCount; i++) {
        for(let r=0; r<brickRowCount; r++) {
            if (bricks[i][r].status == 1) {
            let brickX = (i*(brickWidth+brickPadding))+brickOffsetLeft;
            let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[i][r].x = brickX;
            bricks[i][r].y = brickY;
            c.beginPath();
            c.rect(brickX, brickY, brickWidth, brickHeight);
            c.fill();
            c.closePath();
            }
        }
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function collisionDetection() {
    for (let i = 0; i < brickColumnCount; i++) {
        for (let r = 0; r < brickRowCount; r++) {
            let b = bricks[i][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                        clearInterval(interval); 
                    }
                }
            }
        }
    }
}

function drawPaddle() {
    c.beginPath();
    c.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    c.fill();
    c.closePath();
}
function drawScore() {
    c.font = "16px Arial";
    c.fillText("Score: "+score, 8, 20);
}
function drawLives() {
    c.font = "16px Arial";
    c.fillStyle = "#0095DD";
    c.fillText("Lives: "+lives, canvas.width-65, 20);
}

let x = canvas.width/2;
let y = canvas.height-30;
let radius = 15
let dx = 5;
let dy = 5;

function draw(){
    requestAnimationFrame(draw)
    c.clearRect(0,0,innerWidth,innerHeight)
    drawBricks();
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI * 2);
    c.fill();
    c.closePath();
    drawPaddle();
    drawLives();
    drawScore();
    collisionDetection();
    if(x + dx > canvas.width-radius || x + dx < radius){
        dx = -dx;
    }
    if(y + dy < radius){
        dy = -dy;
    }
    else if(y + dy > canvas.height-radius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      lives--;
      if(!lives) {
        alert("GAME OVER");
        document.location.reload();
      }
      else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 5;
        dy = -5;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
    

    x += dx;
    y += dy;
}

draw();
