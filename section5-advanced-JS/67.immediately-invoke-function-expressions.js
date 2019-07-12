// Immediately Invoke Function Expressions (IIFE)

//function game() {
//    var score = Math.random() * 10;
//    console.log(score >5);
//}
//
//game();

// that way we create a data privacy
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
// invoke the function
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
// invoke the function
})(5);