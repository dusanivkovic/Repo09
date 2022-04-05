//only change code below this line

function myForLoop1(){
    var evenNumbers = "";
    for(i = 0; i < 9; i++){
        evenNumbers += i;
    }
}
function myForLoop2(){
    var evenInverseNumbers = "";
    for(i = 8; i >= 0; i--){
        evenInverseNumbers += i;
    }
    console.log(evenInverseNumbers);
}
myForLoop1();
myForLoop2();



//only change code abowe this line

module.exportS = {myForLoop1,
myForLoop2};