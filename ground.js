class Ground{
    constructor(){

var options={isStatic:true}
this.body=Bodies.rectangle(300,380,600,20,options);
 //Add bodies to game world
  World.add(myWorld,this.body);
    }
    display(){
//to add body to this.body soul
 rectMode(CENTER); 
//the rect should be designed in the x and y axis of soul
 rect(this.body.position.x,this.body.position.y,600,20);
    }
}