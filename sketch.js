
var ground,dustbin1,dustbin2,dustbin3
var engine,world,object,ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(700, 400);

	engine = Engine.create();
	world = engine.world;
	ground=new Ground(600,385,1200,20);
	dustbin1=new Dustbin(400,330,30,85);
	
	dustbin2=new Dustbin(600,330,30,85);
	dustbin3=new Dustbin(500,358,170,30,PI);
	ball=new Paper(50,100,20,20);
	
	

	Engine.run(engine);
  
}


function draw() {
  
background(0);
Engine.update(engine);
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
ball.display();
keyPressed()
}
function keyPressed(){
if(keyCode==UP_ARROW){
Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85})
}
}