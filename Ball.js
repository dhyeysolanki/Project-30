class Ball {

    constructor(x, y, r){


        this.body = Bodies.circle(x, y, r);
        World.add (world, this.body);
        this.img = loadImage ("polygon.png");
        this.r = r;
    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.r*2, this.r*2);
        pop();
    }
}