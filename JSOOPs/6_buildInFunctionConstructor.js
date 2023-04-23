
function Circle(radius){ // internally uses FUnction construct to create object
    this.radius = radius;
    this.draw= function(){
        console.log("obj created via constructor");
    }
}

const circle = new Circle(1);

const Circle1 = new Function('radius' , ` // creating obj using inbuild function here
this.radius = radius;
this.draw= function(){
    console.log("obj created via constructor");
}
`);
const circle2 = new Circle1(1);

Circle1.call({} , 1)   // call method calls the Function, first arg is this arg, 
// first arg {} is this object
// other args are params

// Apply method , used to pass aray in the second param
Circle1.apply({}, [1,2,3])