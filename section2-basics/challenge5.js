/**********************
* CODING CHALLENGE 5
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    // Define the method to calculate tip
    calTips: function () {
        this.tips = [];
        this.totalBill = [];
        
        // . member access
        for( var i = 0; i < this.bills.length; i++) {
            
            var tips;
            
            // i permits to access each value in the array bills.
            var bill = this.bills[i];        
    
            // Determine the percentage based on tipping rules.
            
            if (bill < 50) {
                tips = 0.20;
    
            } else if (bill >= 50 && bill <= 200) {
                tips = 0.15;
        
            } else {
                tips = 0.10;
            }
    
            // Add results to the corresponding arrays
            this.tips[i] = bill * tips;
            this.totalBill[i] = bill + bill * tips;
        }
    }
}



var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 119, 45],
    // Define the method to calculate tip
    calTips: function () {
        this.tips = [];
        this.totalBill = [];
        
        // . member access
        for( var i = 0; i < this.bills.length; i++) {
            
            var tips;
            
            // i permits to access each value in the array bills.
            var bill = this.bills[i];        
    
            // Determine the percentage based on tipping rules.
            
            if (bill < 100) {
                tips = 0.20;
    
            } else if (bill >= 100 && bill <= 300) {
                tips = 0.10;
        
            } else {
                tips = 0.25;
            }
    
            // Add results to the corresponding arrays
            this.tips[i] = bill * tips;
            
        }
    } 
}

// function to calculate average of tips
function calcAverage(tips) {
    
    // initialize the sum.
    var sum = 0;
    
    for (i = 0; i < tips.length; i++) {
        
        sum = sum + tips[i];
    }
    
    // return the total of tips divided by the lenght of the array tips.
    return sum / tips.length;
}

// Do the calculations
john.calTips();
mark.calTips();

// Will pass the array tips into the function.
// The result will be stored into a variable.
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}