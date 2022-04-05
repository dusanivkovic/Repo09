//only change code below this line

function logicalAndOperator(num){
    if((num < 80)&&(num === 80)){
        return "Yes";
    }else{
        return "No";
    }
}
logicalAndOperator(0);
logicalAndOperator(24);
logicalAndOperator(45);
logicalAndOperator(57);
logicalAndOperator(100);
//only change code abowe this line
console.log(logicalAndOperator(100));

module.exportS = logicalAndOperator;