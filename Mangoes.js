class Mangoes{

constructor(x,y,width,height){

var options={

    isStatic: true,
    restitution:0,
    friction:1


    
}
this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Plucking mangoes/mango.png");
      World.add(world, this.body);

}

display(){
    var p=this.body.position;
    push();
    translate(p.x, p.y);
    
    imageMode(CENTER);
    image(this.image, 0, 0,50,50 );
    pop();
  }

}