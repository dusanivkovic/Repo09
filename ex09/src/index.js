//only change code below this line

function logicalOrOperator(num){
    if((num < 20)||(num > 30)){
        return "Out";
    }else{
        return "In";
    }
}
logicalOrOperator(0);
logicalOrOperator(9);
logicalOrOperator(20);
logicalOrOperator(23);
logicalOrOperator(30);
logicalOrOperator(31);
logicalOrOperator(105);

//only change code abowe this line
console.log(logicalOrOperator(21));

module.exportS = logicalOrOperator;