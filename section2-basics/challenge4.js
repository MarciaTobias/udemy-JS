/************************
* CODING CHALLENGE 4
*/

var john = {
    fullName: 'John Smith',
    mass: 110, //kg
    height: 1.95, // meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Miller',
    mass: 78, //kg
    height: 1.69, // meters
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of Mark ' + john.bmi);

} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullName + ' has a higher BMI of John '+ mark.bmi);       
} else {
    console.log('They have the same BMI');
}

