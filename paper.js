class Paper{
    constructor(x,y,r){
        var options={
          isStatic:false,
          restitution:0.3,
          friction:0.3,
          density:1.3
        }
        
        this.body=Matter.Bodies.circle(x,y,r,options)
        this.x=x;
        this.y=y;
        this.r=r
        World.add(world,this.body)
    }
    display(){

        var Paperpos = this.body.position;

        push()
        translate(Paperpos.x,Paperpos.y)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("green")
        fill("white")
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}