class Block {

    constructor (x, y, w, h){

        this.width = w
        this.height = h

        var options = {
            restitution : 0.4,
            friction : 0
        }
        this.body = Bodies.rectangle (x, y, w, h, options);
        World.add (world, this.body);
    }

    display (){

        if (this.body.speed < 5){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();}

        else {
           World.remove (world, this.body); 
        }
    }
}