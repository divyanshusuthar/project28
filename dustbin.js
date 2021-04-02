class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            'restitution' : 0,
            'friction' : 1,
            'density' : 0.1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width =width;
        this.height = height;

        this.image = loadImage("Images/dustbin4.jpg");

        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        fill(255);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
    }

}
