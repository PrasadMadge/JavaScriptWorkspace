
// func declared directly (not in an object)
// but it is an object

function func1(){
    console.log(this);
}

func1();

// func1 declared inside an obj
var obj1 = {
    name: 'Prasad',
    func1: function(){
        console.log('before name update ' + this)
        this.name = 'Prasad updated by func1'

        // func2 declared inside a func1
        var func2 = function(name){
            this.name = name;
            // does not reutrns obj1 but global obj
            console.log('call in func2')
            console.log(this)
        }
        func2('Prasad updated by func2')
        console.log(this)
        
    }
}

obj1.func1();


// //conclusion
// obj1.func1() returns obj1 obj1
// obj1.func1().func2() retruns window, global obj1
// Hence how to make func2 also return the current Object
// this.self = this, to the rescue, use it in func1() declaration

var obj2 = {
    name: 'Prasad',
    func1: function(){
        var self = this
        console.log('before name update ' + this)
        self.name = 'Prasad updated by func1'

        // func2 declared inside a func1
        var func2 = function(name){
            self.name = name;
            // because we use self returns self instead of this
            console.log(self)
        }
        func2('Prasad updated by func2')
        console.log(self)
        
    }
}

obj2.func1();