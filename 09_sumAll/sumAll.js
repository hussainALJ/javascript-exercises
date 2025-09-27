const sumAll = function(a, z) {
    let sumAtoZ = 0;
    if ((a < 0 || z < 0) || (!Number.isInteger(a) || !Number.isInteger(z))) {
        sumAtoZ = "ERROR";
    }else if (a < z) {
        for (let i = a; i <= z; i++) {
          sumAtoZ += i;
        }
    }else if (a > z){
        for (let i = z; i <= a; i++){
            sumAtoZ += i;
        }
    }
    return sumAtoZ;
};

// Do not edit below this line
module.exports = sumAll;
