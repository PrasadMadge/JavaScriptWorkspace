function Circle(radius){

    // to make abstractions make local variable instead of .this


    this.radius = radius;

    let defaultLocation = { x:0 , y:0};

    // private method
    let computeOptimumLocation = function(factor){

    }
    
    // calling above method in draw method
    this.draw = function(){
        // in fucntions we can declare variables and func but they are local
        // closure determinis which vairables accessible 
        // this method can access global variables from parent class and the local ones
        let x, y;

        // directly accessible because above
        computeOptimumLocation(0.1);
        console.log("this is constructor log");
    }
}

const circle11 = new Circle(1);

// now due to this and let in circle obj creation let variables are abstracted and this is visible
circle11.draw();
