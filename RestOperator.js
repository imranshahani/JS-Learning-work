function sum(name,age, email,...arg){
    console.log(` My name is : ${name} ${age} ${email}`);
    let sum = 1;
    for(let a in arg){
        sum+=arg[a];
    }
    console.log(`my Age is : ${sum} `);
    
}

sum("Joel Bhai","27","ab@gmail.com", 3,5);
