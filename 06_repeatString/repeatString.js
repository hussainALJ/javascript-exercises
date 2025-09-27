const repeatString = function(str, num) {
    let repeatStr = "";
    let i = 0;
    do {
        if (num > 0){
        repeatStr += str;
        }else if(num < 0){
            repeatStr = "ERROR";
            break;
        }
        i++;
    }while (i < num) 
    return repeatStr;
};
// Do not edit below this line
module.exports = repeatString;
