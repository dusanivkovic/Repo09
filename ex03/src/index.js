//only change code below this line

function myEqualFunction(num){
    if(num === 23){
        return "Equal";
    }else{
        return "Not equal";
    }
}
myEqualFunction(23);
myEqualFunction(5);
myEqualFunction("23");
myEqualFunction('23');
//only change code abowe this line

console.log(myEqualFunction("23"));
module.exportS = myEqualFunction;