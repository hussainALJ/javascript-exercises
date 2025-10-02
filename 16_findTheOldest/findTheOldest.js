const findTheOldest = function(arr) {
    let sortedArr = arr
    .map(obj => {
        if (obj.yearOfDeath === undefined) {
            obj.yearOfDeath = new Date().getFullYear();
            return obj;
        }else {
            return obj;
        }
    })
    .sort((a, b) => - (a.yearOfDeath - a.yearOfBirth) + (b.yearOfDeath - b.yearOfBirth));
    let oldest = sortedArr[0];
    console.log(oldest);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
