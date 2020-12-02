
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200, 500, 40)
	bob2 = new Bob(280, 500, 40)
	bob3 = new Bob(360, 500, 40)
	bob4 = new Bob(440, 500, 40)
	bob5 = new Bob(520, 500, 40)

	roof1 = new Roof(200, 30, 600, 50)
	roof2 = new Roof(280, 30, 600, 50)
	roof3 = new Roof(360, 30, 600, 50)
	roof4 = new Roof(440, 30, 600, 50)
	roof5 = new Roof(520, 30, 600, 50)

	rope1 = new Rope(roof1.body, bob1.body)
	rope2 = new Rope(roof2.body, bob2.body)
	rope3 = new Rope(roof3.body, bob3.body)
	rope4 = new Rope(roof4.body, bob4.body)
	rope5 = new Rope(roof5.body, bob5.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);
  
	roof3.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:-1000})
	}
}