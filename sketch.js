
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(80,80);
	ground = new Ground(400,680,800,20);

	leftSide = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	rightSide = new Dustbin(670,620,20,100);

	launcher = new Launcher(paper.body,{x:200, y:100});


}


function draw() {
  rectMode(CENTER);
  background("pink");

  Engine.update(engine);

  paper.display();
  ground.display();
  leftSide.display();
  rightSide.display();
  bottom.display();
  launcher.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-17})
	}
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    Launcher.fly();
}



