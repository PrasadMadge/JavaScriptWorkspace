function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.log("loggin in construct funtion");
    }
}    

const circle = new Circle(1);
circle.draw();

// in jS we can add extra properties dynamically

// adding new property
circle.location = {x: 1};

// bracket notetion to accesss add props but useful in some scenarios
// user to get runtime prop name and add it dynamic, so braket notation is useful
// AND also used for special characters prop
circle['location'] = {x: 1};

// We can also delete props from a object with delete operator
delete circle.location;
OR
//delete circle['location'];


