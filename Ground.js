class Ground {

    constructor (x, y, w, h){

        this.width = w
        this.height = h
        var options = {

            isStatic : true
        }
        this.body = Bodies.rectangle (x, y, w, h, options);
        World.add (world, this.body);
    }

    display (){

        push();
        fill(37, 211, 234)
        rectMode(CENTER);
        rect( this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}