function greetMessage(greetingPassed){
    console.log('Good Mornng, John');
    greetingPassed();
}
function greetMessage2(){
    console.log("GoodMorning, Peter, GM, Mark");
}
 greetMessage(greetMessage2);
 