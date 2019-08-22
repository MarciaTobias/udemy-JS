//////////////////////////////////////////////////
// Lecture: Rest Parameters

/*
//ES5
// We don't define any parameter four our function, and then just use the arguments keyword
function isFullAge5() {
    //console.log(arguments);
    // this is the way to transforme those arguments into an array
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    });
} 

//isFullAge5(1990, 1999, 1965);
//// if we need add more years
//isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18)); 
}

isFullAge6(1990, 1999, 1965);
// if we need add more years
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/

//ES5
// We don't define any parameter four our function, and then just use the arguments keyword
function isFullAge5(limit) {
//    console.log(arguments);
    // this is the way to transforme those arguments into an array
    var argsArr = Array.prototype.slice.call(arguments, 1);
//    console.log(argsArr);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    });
} 

isFullAge5(16, 1990, 1999, 1965);


//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit)); 
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

