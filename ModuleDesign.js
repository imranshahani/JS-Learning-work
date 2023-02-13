let Mymodule = function Mymodule(){
 let id = "BB-5847";
    return{
        func1 : function(str){
            console.log("I am learn to Mymodule Design func1 :" + str);
            console.log("I can access variables :" + id)
        },

        func2 : function(str){
            console.log("I am learn to Mymodule Design func2 :" + str);
            console.log("I can access variables :" + id)
        },

        func3 : function(str){
            console.log("I am learn to Mymodule Design func3 :" + str);
            console.log("I can access variables :" + id)
        },
    }
}

let app = Mymodule();
app.func1("John");
app.func2("John");
app.func3("John");