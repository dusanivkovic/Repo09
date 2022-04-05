//only change code below this line

function checkSign(num){
    return (num === 0) ? "Zero": (num > 0)? "positive": "negative";
}
checkSign(10);
checkSign(-12);
checkSign(0);


//only change code abowe this line
console.log(checkSign(0));

module.exportS = checkSign;