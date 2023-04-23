

// ANother way to define a object in js
// Always Capital

// constructor function
function Circle(radius){
    console.log('this', this);
    this.radius = radius;
    this.draw = function(){
        console.log('constructor draw');
    }
}

const another = new Circle(1);  // new creates a empty obj
another.draw();