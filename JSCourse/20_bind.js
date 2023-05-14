

var person = {
    firstname : 'Prasad',
    lastname : 'Madge',
    getFullName : function(){
        return this.firstname + ' '+ this.lastname;
    }
}

function logName(){
    console.log('The name is '+ this.getFullName())
}

// Here we have 2 obj, person and func, logName
/* logName wants to access person obj function here directly and not via person obj

Hence logName() if called directly will not be able to find getFullName on global obj
Hence it fails
*/

// fix 1, normal bind

var newLogName = logName.bind(person);
newLogName();
/* breakdown
whenever bind is called, it creates a copy of the same method and instead of this binds person and returns it
console.log('The name is '+ person.getFullName())

it will look something like above
*/

// fix 2, IIFE bind

var randomFuncobj = function logName1(param1, param2){
    console.log('The name is '+ this.getFullName())
}.bind(person)

randomFuncobj();

// outputs The name is Prasad Madge

