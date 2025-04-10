

//  ARROW FUNCTION IN JS
// is the shortest way to rwite function in js by using =>
    //  Ni function yandikwa mu buryo bwihuse, idakoresha ijambo function. Ikoresha => hagati ya parameters na body ya function

// example(1 .One parameter)
const sayHello = () => {

    console.log("hello mama!");
    
}
sayHello();

// another example in our day file.( No parameters)

const cookTea = () =>{
    console.log("Mama can you cook for us the tea.");
    console.log("1.take sousepane");
    console.log("2.put in water");
    console.log("3.put it on gas in 5 seconds");
    console.log("4.put in the sugar");
    console.log("5.put it in the cup");
    console.log("6.now your tea is ready enjoy !");

}
cookTea();

// example("3")on ( Multiple parameters)

const add = (a,b) => {
return a + b;
}
console.log(add(6,4));

// example(4). One-line return (Implicit return)

const square = a => a*a;
console.log(square(6));
  

// real life example

const thankyou = name =>
    console.log("thankyou," + name );
thankyou("Mama");

// to calculate the kilograms

const calculateBMI = (weight, height) => {
    return weight / (height * height);
  };
  
  console.log(calculateBMI(80, 1.78)); 
   
//   another example
const isExpensive = price => price > 4000;
console.log(isExpensive(1000)); 
console.log(isExpensive(5000));


