// Factory function to define a object in  a func
function createCircle(radius){
    return{
        radius, // if key and value are same you can use it
        draw: function(){
            console.log('draw cool factory');
        }
    };   
}

const circle = createCircle(1);
circle.draw();

function aFunctionWhichIsLikeClass(){
    return{
        funcVariable: 123,
        internalFunction: function(){
            console.log('outputting cool');       
        }
    };
}

const classObject = aFunctionWhichIsLikeClass();
classObject.internalFunction();