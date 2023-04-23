

// Execution context (Global)
// created global obj, creates this variable
// JS engines creates automatically, obj and .this

// IMP the chrome console tab helps us peep inside Execution context, like a debug tool
// to see what values and obj are live
// type "this" in console and see window
// this is variable at global indierectly refers to window object
// window is the global object for chrome tab
// in browswers it is window

// Global means not inside a function is Global

var a = "hello world";

function b(){

}

// Very Imp
// In JS any var or function not inside any other function get attached to global Obj
// In browser gloabl obj it is window


console.log("this is cool");