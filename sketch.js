//I cannot figuere out how to make it so that the paper will go in the dustbin. It will not for me.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ground2, box, ball;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("black");

	engine = Engine.create();
	world = engine.world;

	box = new Box(800,600, 195, 120);
	ball = new Ball(200,640);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  box.display();
  ball.display();

  drawSprites();
  keyPressed();
}

function keyPressed() {
	if (keyCode  === UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:.275,y:-0.3});
	 }
   }