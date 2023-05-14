var person = {
    firstname : 'Prasad',
    lastname : 'Madge',
    getFullName : function(){
        console.log(this.firstname + ' '+ this.lastname)
        return this.firstname + ' '+ this.lastname;
    }
}


var randomFuncobj = function logName1(param1, param2){
    console.log('The name is '+ this.getFullName());
    console.log('func params '+param1 + " " + param2);
}

var person2 = {
    firstname : 'Rishi',
    lastname : 'Kesh'
}

// what if we want to borrow getFullName from person to person2

console.log(person.getFullName.apply(person2));

/*  
Rishi Kesh
Rishi Kesh
*/

/* this will only work if both the objs have similar prop names, fistname and lastname, in this case */


