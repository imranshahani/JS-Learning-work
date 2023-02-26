const arr = [1,2,3,4,5,6];

for(a=0;a<arr.length; a++){
    console.log(arr[a]+10)   
}

// Higher Order Function forEach() method

let arrays = [10, 22 ,33 ,44];

     arrays.forEach(number=>{
    
    console.log(number+10)
})

// Higher Order Function map()

let arry = [10, 15, 20, 21]

let map = arry.reduce(num=>{
    return num + 10;
})
console.log(map)


setTimeout(()=>{
    console.log("hello")
})


