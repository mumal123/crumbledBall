class Paper{
    constructor(x,y,width,height){
        var options={
            restitution:0.3,
        isStatic:false,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(200,100,20,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill(230,230,0);
        ellipse(pos.x,pos.y,20,20);
    }
}