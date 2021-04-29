class Letter{
    constructor(x,y,image){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 25, 25, options);
        this.width = 25;
        this.height = 25;
        this.image = loadImage(image);
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}