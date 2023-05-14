

var person = {
    firstname : 'Prasad',
    lastname : 'Madge',
    getFullName : function(){
        return this.firstname + ' '+ this.lastname;
    }
}


var randomFuncobj = function logName1(param1, param2){
    console.log('The name is '+ this.getFullName());
    console.log('func params '+param1 + " " + param2);
}

var newObj1 =  randomFuncobj.bind(person);
newObj1('Pro', 'Plus');

/* The name is Prasad Madge
func params Pro Plus */

// we can also do the same with call
/* remember call does not creates a new method and returns it but whereas it executes it right away */

randomFuncobj.call(person, 'Pro', 'Plus');
/* The name is Prasad Madge
func params Pro Plus */

/* For apply, just past an array */
randomFuncobj.apply(person, ['Pro1', 'Plus1']);
/* The name is Prasad Madge
func params Pro1 Plus1 */

