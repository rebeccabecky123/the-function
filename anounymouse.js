


// is a function without a name 
// This will not work alone unless you assign it to something or call it directly.
// example (1)

const greet = function () {
    console.log("hello Becky");
}
greet();

// this function is work like .
// imagene you are going to take a room in the hotel you don't know anf you don't care about 
// who is going to give you the room but what you care about is just to get the room

// another example.

const call = function (){
    console.log("can you call my mama now i need her.");
}
call();

//  Example 2: Inside setTimeout

setTimeout(function()
{
    console.log("wait for 3 seconds");
}, 3000,);

// another example by using Inside an array method

const numbers = [1,2,3,];

numbers.forEach(function(num){
    console.log(num * 3);
});

// is use in array methos(.map(),.filter(),foEach()) 
// in our daily life for set time and setInterval