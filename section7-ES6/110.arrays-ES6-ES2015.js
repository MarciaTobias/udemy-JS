//////////////////////////////////////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
   cur.style.backgroundColor = 'dodgerblue'; 
});

const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// Loop

//ES5
//for(var i = 0; i < boxesArr5.length; i++) {
//    
//    if(boxesArr5[i].className === 'box blue') {
//        // skip this interation and goes to the next
//        continue;
//    }
//    
//    boxesArr5[i].textContent = 'I changed to blue!';
//}

//ES6
// simple loop
for (const cur of boxesArr5) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// If we want fiend a number in a array

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
   return cur >= 18; 
});
console.log(full);
// retrieve de idex
console.log(full.indexOf(true));
// to fiend the value
console.log(ages[full.indexOf(true)]);


//ES6
// retrieve de idex
console.log(ages.findIndex(cur => cur >= 18));
// to fiend the value
console.log(ages.find(cur => cur >= 18));


