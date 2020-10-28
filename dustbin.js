class Dustbin{
    constructor(x,y,width,height){
      this.body= Matter.Bodies.rectangle(x,y,width,height);
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      World.add(world,this.body);
    }

    display(){

        strokeWeight(4)
        stroke("green")
        fill("white")
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
    }
}