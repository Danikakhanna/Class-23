class Box{
    constructor(x,y,width,height){

var options={friction:1.0,density:1.0,restitution:0.4}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width
this.height=height
 //Add bodies to game world
  World.add(myWorld,this.body);
    }
    display(){
//to add body to this.body soul
 rectMode(CENTER); 
//the rect should be designed in the x and y axis of soul
 rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}