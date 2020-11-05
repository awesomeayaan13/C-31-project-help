class Plinko {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,width,height,radius,options);
        this.width = width;
        this.height = height;
        this.radius = 10
        World.add(world, this.body);

        
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height, this.radius);
      }
    };

