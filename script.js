// console.log(); to debug
console.log("Loading JS")
// alert('Learning JS'); to pop up
// variables- to assign value
// keywords- reserve words, example: for,if, switch var...
var a = 3;  
console.log(a);

// datatypes
// 1. primitive - string, number, boolesn. null, undefined, symbol
// 2. refferential - function, arrays, objects

var a = '3';
var b = 3;
var c;
var d = null;
var e = true;
console.log(e, typeof(e));

console.log(a,b,c,d,e);

// conditional statment - if,if-else, switch
// looping - for, while, do while;

var a = 3;
var b = 4;
if(a>b){
    console.log(a," a is greater");
}
    else{
        console.log(b,"b is greater");
    }
// hosting- all the decleration will top of the stack and initialization will be dne later

console.log('the value of n is',n);
var n = 3;

// refferential data type to not to repeat
// dry
// function to use repeatative task

function add(a , b){
    var sum = a + b;
    console.log('the value sum is', sum)
}

add(15, 10);