// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

// loop go trought the array
function arrayCalc(arr, fn) {
    
    var arrRes = [];
       
    for( var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// element = year 
function calculateAge(element) {
    return 2016 - element;
}

// element is a genearic name
// boolean result
function isFullAge(element) {
    return element >= 18;
}

// function to calcute the max heart rate for people between 18 to 81
function maxHeartRate(element) {
    
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}

// callback function
var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(rates);
