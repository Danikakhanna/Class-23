//declaring alias to avoid use of big names for matter modules
 const Engine=Matter.Engine;
  const World= Matter.World;
  const Bodies=Matter.Bodies; 
  //declaring variables to create game world and engine using matter modules
   var myEngine,myWorld,ground,box1,box2,box3,box4,ball;
function setup() {
   //create canvas 
   createCanvas(600,400);
    //create game engine using create method of Engine Module of Matter
     myEngine=Engine.create();
      //myWorld is the myEngine's world
       myWorld=myEngine.world;
       ground=new Ground()
       box1=new Box(100,100,20,20);
       box2=new Box(100,50,20,40);
}
function draw(){
  background(0);
  Engine.update(myEngine)
  ground.display();
  box1.display();
  box2.display();
}
