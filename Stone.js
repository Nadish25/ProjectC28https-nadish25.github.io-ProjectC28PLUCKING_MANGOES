class Stone {
    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitution:0,
            friction:5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,r-5,options);
        World.add(world,this.body);

        this.image = loadImage("stone.png");
        this.x = x;
        this.y = y;
        this.r = r*2;
    }

    

    display(){
        this.x = this.body.position.x;
        this.y = this.body.position.y;

        imageMode(CENTER);
        image(this.image,this.x,this.y,this.r,this.r);
    }
} 