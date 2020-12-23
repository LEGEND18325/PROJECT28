
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var tree;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stone;
var juno;
var slingshot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,500,1200,50);
	tree = new Tree(600,300,400,400)
	
	mango1 = new Mangoes(600,200,50,50)
	mango2 = new Mangoes(560,155,50,400)
	mango3 = new Mangoes(450,230,400,400)
	mango4 = new Mangoes(650,160,400,400)
	mango5 = new Mangoes(500,290,400,400)
	mango6 = new Mangoes(650,260,400,400)
	mango7 = new Mangoes(700,200,400,400)
	mango8 = new Mangoes(750,240,400,400)
	stone = new Stone(250,400,50,50)
	juno = new Juno(250,450,10,10)
	slingshot = new Slingshot(stone.body,{x:170,y:400});
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  ground.display();
  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  juno.display();
  slingshot.display();  
  drawSprites();
}
    
function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	
	
	
	}
	
	
	function mouseReleased(){
	
	slingshot.fly();
	
	
	
	
	}
	




