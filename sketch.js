
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bobObject3 = new Bob(350,300)
	bobObject4 = new Bob(4000,300)
	bobObject5 = new Bob(450,300)

	rope1=new rope(bob1.body,roofObject.body,-100, 0)
     World.add(world,rope1);

	rope2=new rope(bob2.body,roofObject.body,-50, 0)
    World.add(world,rope2);

	rope3=new rope(bob2.body,roofObject.body,0, 0)
    World.add(world,rope3);

	rope4=new rope(bob2.body,roofObject.body,+50, 0)
    World.add(world,rope4);

	rope5=new rope(bob2.body,roofObject.body,+1000, 0)
    World.add(world,rope5);

	
	
	Engine.run(engine);
	
  
}


function draw() {
	background("white");
	Engine.update(engine);
  rectMode(CENTER);
  background(230);
  roofObject.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  bob1.display();
  bob2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}

function keypressed()
{
if(KeyCode===32)
{
Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x : -730,y :0});

}


}






