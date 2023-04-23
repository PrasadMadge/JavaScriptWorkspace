// different ways of object creation in js

// 1, same like java, use const and = to create class and var and funcs
const car = {
    make: 'Iron',
    move: function(){
        console.log('car moves')
    } 
}


// 2, class objects spilling out of an factory func

function spillCarObject(){
    return{
        make: 'steel',
        move: function(){
            console.log("car moves via factory function")
        }
    };
}

// 4, object creation via construction creation

function CarConstructor(){
    this.make = 'Allu';
    this.move = function(){
        console.log('car moves via constructor');
    }
}

// normal class call
car.move();

// factory func call
const obj2 = spillCarObject();
obj2.move();

// constructor call
const randomObjName = new CarConstructor();
randomObjName.move();