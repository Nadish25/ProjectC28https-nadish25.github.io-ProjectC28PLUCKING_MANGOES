
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var tree;
var ground;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var boy;
var sling;
var backgroundImage

function preload()
{
  backgroundImage=loadImage("background.jpg")
}

function setup() {
	createCanvas(1255, 605);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  //stone=new Stone(250,460,190);
  stone=new Stone(300,460,40,40); 
	

	mango1=new Mango(820,260,40);
	mango2=new Mango(900,200,40);
	mango3=new Mango(1200,200,40);
	mango4=new Mango(1090,270,40);
	mango5=new Mango(1000,100,40);
	mango6=new Mango(1090,70,40);
	mango7=new Mango(1050,200,40);
	boy=new Boy(300,520,10,10);
	ground=new Ground(600,580,1500,15);
  tree=new Tree(1000,296,450);
  sling=new Slingshot(stone.body,{x:220,y:460});


  
	
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  
  

  stone.display();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  boy.display();
  sling.display();
  stone.display();
  


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  
  textSize(20);
  fill(0)
  text("Press Space to try again ",20,50);

  textSize(20);
  fill(5)
  text("Try to shoot all the mangoes in one go!!",20,100);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}
function mouseReleased()
{
  sling.fly();
}

function detectCollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
    if (keyCode === 32) {
      Matter.Body.setPosition(stone.body, {x:300, y:460}) 
      sling.attach(stone.body);
    }
    }
  