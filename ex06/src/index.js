//only change code below this line

function comparasionToEqual(a){
    if(a<5){
        return "Less than 5";
    }
    if(a<10){
        return "Less than 10";
    }
    if(a>20){
        return "More than 20";
    } 
    if(a>10){
        return "10 or over";
    }

}
comparasionToEqual(0);
comparasionToEqual(5);
comparasionToEqual(17);
comparasionToEqual(21);
//only change code abowe this line

console.log(comparasionToEqual(21));
module.exportS = comparasionToEqual;