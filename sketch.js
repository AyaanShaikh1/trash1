
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new paper(20,680,50,50);
	dustbin1 = new dustbin(400,680,200,40);
	dustbin2 = new dustbin(300,680,20,180);
	dustbin3 = new dustbin(500,680,20,180);
	ground = new Ground(500,690,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  
}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});

}
}

