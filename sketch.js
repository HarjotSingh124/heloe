var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 10, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	box1=createSprite(400,465,100,20);
	box1.shapeColor=("red");
	box2=createSprite(350,450,20,50);
	box2.shapeColor=("red");
	box3=createSprite(450,450,20,50);
	box3.shapeColor=("red");



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 box12=Bodies.rectangle(400,465,100,20,{isStatic:true});
	 World.add(world,box12);
	 box13=Bodies.rectangle(350,450,20,50,{isStatic:true});
	 World.add(world,box13);
	 box15=Bodies.rectangle(450,450,20,50,{isStatic:true});
	 World.add(world,box15);
	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
    
  }
}



