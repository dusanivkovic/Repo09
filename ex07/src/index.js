//only change code below this line

function randomRangeNumber(minNumber, maxNumber){
    return Math.floor(Math.random()*(maxNumber - minNumber + 1)) + minNumber;

}
randomRangeNumber(5, 10);
//only change code abowe this line

console.log(randomRangeNumber(5, 10));
module.exportS = randomRangeNumber;