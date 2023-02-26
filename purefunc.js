
// Impure Function
const num = 20;

const result = function sum(num1){
    return num + num1;
}
console.log(result(30))

// Pure Function


const result1 = function sum(num2 , num3){
    return  new Date();
}
console.log(result1(20,40));