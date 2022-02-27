
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ballOptions={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Matter.Bodies.circle(100,400,50,ballOptions)

	Engine.run(engine);

	ball = Bodies.circle(100,100,15)
	World.add(world,ball)

	groundObj = new Ground(width/2,490,width,10)
	leftSide = new Ground(270,445,10,80)
	rightSide = new Ground(380,445,10,80)

  
}
function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0.01})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show()
  leftSide.show()
  rightSide.show()
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}
