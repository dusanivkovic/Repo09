//only change code below this line

function compareStrictValues(m){
    if(m !== 55){
        return "Not equal";
    }else{
        return "Equal";
    }
}
compareStrictValues(55);
compareStrictValues("55");
compareStrictValues("21");
compareStrictValues(12);
//only change code abowe this line

console.log(compareStrictValues(55));
module.exportS = compareStrictValues;