class Stone{

    constructor(x,y,width,height){
    
    var options={
    
        isStatic: false,
        restitution:0.5,
        friction:1,
        density:0.1
    
    
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          this.image = loadImage("Plucking mangoes/stone.png");
          World.add(world, this.body);
    
    }
    
    display(){
        var p=this.body.position;
        push();
        translate(p.x, p.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    
    }