//////////////////////////////////////////////////
// Challenge 8

// 3 parks and 4 streets

// Superclass with constructor
class TownElements {
    // that parte changed, we don't need put collon or semi collon
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear; 
    }
}

// Subclass with constructor
class Park extends TownElements {
    constructor(name, buildYear, parkArea, numberTrees) {
        super(name, buildYear);
        this.parkArea = parkArea; //km2
        this.numberTrees = numberTrees; 
       
    }
    
    treeDensity () {
        const density = this.numberTrees / this.parkArea;
        console.log(`${this.name} has a tree density of ${density} tress per square km.`);
    }
    
    calculateAge = function() {
        let age = new Date().getFullYear() - this.build;
        console.log(age);
    }
}

// Subclass with constructor
class Street extends TownElements {
    constructor(name, buildYear, lenght, size = 3) {
        super(name, buildYear);
        this.lenght = lenght;
        this.size = size;
    } 
    
    classifyStreet() {
        
        // Create new empty map
        const size = new Map();
        
        // Set the new sizes into the map
        size.set(1, 'tiny');
        size.set(2, 'small');
        size.set(3, 'normal');
        size.set(4, 'big');
        size.set(5, 'hug');
        
        console.log(`${this.name}, built in ${this.buildYear}, is a ${size.get(this.size)} street.`);
        
    }
}
 
// New objects into an array
const parks = [new Park('Green Park', 1887, 0.2, 215),
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park('Oak Park', 1953, 0.4, 949)];

// New objects into an array
const streets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                new Street('Evergreen Street', 2008, 2.7, 2),
                new Street('4th Street', 2015, 0.8),
                new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    
    // reduce method, to make the sum of all elements in the array
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return[sum, sum / arr.length];
    
}

function reportParks(p) {
    
    console.log('---- PARKS REPORT ----');
    
    // Density, trought loop into the array park
    p.forEach(el => el.treeDensity());
    
    // Map methodo to go through all elements in the array
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    // Destructuring
    const [totalAge, avgAge] = calc(ages);

    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 tress
    // from p array we will store into in a new array
    // find it will show the element wich has more than 1000 trees
    const i = p.map(el => el.numberTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 tress`);
    
}

function reportStreets(s) {
    
    console.log('---- STREETS REPORT ----');
    
    // Average lenght
    
    
    
}

reportParks(parks);
reportStreets(streets);



