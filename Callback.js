//Task 1(callback)
function greetMessage(greet){
    console.log(`Good Mornng, ${greet}`);
    
}
 greetMessage("John");

function greetMessage2(array,callback){
    array.forEach(name => {callback(name)
        });
}
 greetMessage2(["john", "peter", "mark"],greetMessage);
 

//Task 1(array) 


