console.log("Testing connection to the PONG game")

let myCanvas;
let ball, vel;

function setup() {
    myCanvas = createCanvas(500,500);
    myCanvas.parent('gamePanel');
    ball = createVector(50,250);
    vel = createVector(1,0);
    vel.rotate( radians( random(-45,45) ) );
    vel.setMag(5);
}

function draw() {
    background(180,255,220);

    //PADDLE
    rectMode(CENTER);
    fill(0,100,0);
    stroke(0,0,0);
    strokeWeight(5);
    rect(450, mouseY, 15, 75, 10);

    //BALL
    ball.add(vel);
    if (ball.x > 500) vel.reflect( createVector(-1,0) );
    if (ball.x < 0) vel.reflect( createVector(1,0) );
    if (ball.y > 500) vel.reflect( createVector(0,-1));
    if (ball.y < 0) vel.reflect ( createVector(0,1) );

    fill(180,220,255);
    ellipse(ball.x, ball.y, 20 );

    //BALL and PADDLE collider
    if ( abs(ball.x-450) < 20 && abs(ball.y-mouseY) < 50) {
        vel.set(-1,0);
        vel.rotate( radians(random(-60,60) ) );
        vel.setMag(5);
    }
}