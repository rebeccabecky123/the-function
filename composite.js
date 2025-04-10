
// example 1
function addFive(x){

    return x +5;
}
function multiplyByTwo(x){
    return x*2;
}

// combine two function (composition)

let result = multiplyByTwo(addFive(3));
console.log(`the composed function is :${result}`)

// means that this function help two or many function to bring it together to make 
// one function  (nibintu byinshi ushira hamwe kugirango ubone kimwe )
// the compose function is use full becouse it combine different part together 