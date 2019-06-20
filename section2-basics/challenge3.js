/****************************
CODING CHALLENGE 3
*/

var tipCalculator = function (bills) {
    
    var tips;
    
    if (bills < 50) {
        tips = 0.20;
    
    } else if (bills >= 50 && bills <= 200) {
        tips = 0.15;
        
    } else {
        tips = 0.10;
    }
    
    return tips * bills;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
           tipCalculator(bills[1]),
           tipCalculator(bills[2])];

var totalBill = [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2]];

console.log(tips, totalBill);