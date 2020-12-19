class Plinko {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0.8,
            friction:0
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("aqua");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}