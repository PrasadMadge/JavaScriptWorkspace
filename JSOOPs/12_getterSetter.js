function CircleBig(radius){

    // to make abstractions make local variable instead of .this
    this.radius = radius;

    // local variable to func
    let defaultLocation = { x:0 , y:0};

    // getter method.
    this.getDefaultLocation = function(){
        console.log("in default location function");
        return defaultLocation;
    };
    
    // calling above method in draw method
    this.draw = function(){
        console.log("this is constructor log");
    };

    // getter method.
    Object.defineProperty(this, 'defaultLocation' , {
        // get is keyword here
        get: function(){
            return defaultLocation;
        },
        // set is special keyworkd
        set: function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid Location');
            defaultLocation = value;
        }
    });
}

const circleBig = new CircleBig(1);

// now due to this and let in circle obj creation let variables are abstracted and this is visible
circleBig.defaultLocation;
//circleBig.defaultLocation = 1;