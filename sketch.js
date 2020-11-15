
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dimage;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

    ground=new Ground(400,650,800,10)

	dustbinR=new Dustbin(670,595,10,100)
	dustbinB=new Dustbin(626,640,100,10)
	dustbinL=new Dustbin(582,595,10,100)
    paper=new Paper(100,550,18)
    dimage= new Dustbin2(626,595,100,100);
    Engine.run(engine);
    
   


}


function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbinR.display();
  dustbinL.display();
  dustbinB.display();
  dimage.display();
  drawSprites();
 keyPressed();
}

function keyPressed(){
    if(keyDown(UP_ARROW)){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-20});
    }
    }
    
