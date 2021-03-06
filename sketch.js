const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;
var world;

function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	plane = new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+490;

	bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	rope1 = new Rope(bobObject1.body,plane.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,plane.body,-bobDiameter*1, 0);
	rope3 = new Rope(bobObject3.body,plane.body,0, 0);
	rope4 = new Rope(bobObject4.body,plane.body,bobDiameter*1, 0);
	rope5 = new Rope(bobObject5.body,plane.body,bobDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255, 138, 138);

  plane.display();
  fill(255, 17, 0);
  bobObject1.display();
  fill(255, 89, 0);
  bobObject2.display();
  fill(255, 230, 0);
  bobObject3.display();
  fill(0, 219, 7);
  bobObject4.display();
  fill(0, 0, 255);
  bobObject5.display();
  rope1.display();
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}

//function drawLine(constraint){
	//bobBodyPosition=constraint.bodyA.position
	//roofBodyPosition=constraint.bodyB.position

	//roofBodyOffset=constraint.pointB;
	
	//roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	//roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	//line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
//}
