//only change code below this line

function switchCase(letter){
    switch(letter){
        case 'a':
            return "antelope";
            break;
        case 'b':
            return "bird";
            break;
        default:
            return "stuff";
            break;
    }
}



//only change code abowe this line
console.log(switchCase("b"));

module.exportS = switchCase;