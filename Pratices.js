// Array duplicate set
const number = [1,2,3,4,4,3,5,6,3]
 const duplicate = new Set(number)
    console.log(duplicate)
duplicate.delete(3)
console.log(duplicate)
console.log(number)

// Arrays Method
const names =["ALi","Joel","Salman"]

console.log(names.at(2))
console.log(names[names.length -3])
 
console.log(names);

//Arrays and Strings

// var a = 1;
// var b = 2;
// var d = [1,2];
// d.push(3)
// console.log(c)

const obj = {
    name : "Ali",
    caste: "hyder"
}

console.log(obj)

const objs = new Map([
    [1 , {name:"shah"}],
    [2 , {name:"hussain"}],

])

objs.set({userId : 1},{name:"john"})

console.log(objs)


const array = ["one","two", "three"]


console.log(array)