function sum(name,age,...arg){
    console.log(` My name is : ${name} ${age}`);
    let sum = 1;
    for(let a in arg){
        sum+=arg[a];
    }
    console.log(`my age is : ${sum} `);
    
}

sum("Joel Bhai","27", 3,5);
sum("Imran Ali", "21", 10,10); 