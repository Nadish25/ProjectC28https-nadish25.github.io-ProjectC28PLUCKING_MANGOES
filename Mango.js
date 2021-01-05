class Mango {
  constructor(x,y,r){
      var options = {
          isStatic:true,
          restitution:0.3,
          friction:1
      }

      this.body = Bodies.circle(x,y,r,options);
      World.add(world,this.body);
      this.image = loadImage("mango.png");
      this.r = 80;
      
  }

  display(){
    var mangoPos=this.body.position;	
    push();
    translate(mangoPos.x, mangoPos.y);
    rotate(this.body.angle)
    fill(255,0,255)
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, 0,0,this.r,this.r)
    pop();

     }
}