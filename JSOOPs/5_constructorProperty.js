function circle(radius){
    return{
        radius,
        draw: function(){
            console.log("function factory");
        }
    };
}

const circle1 = circle(1);
circle1.draw();

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("constructor obj");
    }
}

const another = new Circle(1);
another.draw();