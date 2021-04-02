class Paper{
    constructor(){
        var options = {
            isStatic : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2,
        }
        this.body = Bodies.rectangle(250,540,20,20,options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("Images/paper1.png");

        World.add(world,this.body);
    }
    display(){
        var angle = this.body,angle;
        imageMode(CENTER);
        rotate(angle);
        fill("white");
        image( this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }

}
