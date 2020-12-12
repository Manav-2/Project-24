const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject;
var dustbinObject;
var groundObject;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;
	paperObject = new Paper(200,450,40);
	dustbinObject = new Dustbin(1300,650);
	groundObject = new Ground(width/2, 670, width, 20); 
	
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	})
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  dustbinObject.display();
  groundObject.display();
 
  keyPressed();
}

function keyPressed(){

	 if(keyCode === UP_ARROW){
         Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:25,y:-20})
	 }
}

