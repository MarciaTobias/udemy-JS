// BUDGET CONTROLLER
var budgetController = (function() {
    
    // function constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    // function constructor
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }; 
    
    // data structure ready to receive data
    var data = {   
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
    return {
        
        // it will save the information inputed by the user
        addItem: function(type, des, val) {
            
            var newItem, ID;
            
            // it will verify if the array is empty
            if(data.allItems[type].length > 0) {
                
                // Create new ID 
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                
            } else {
                ID = 0;
            }
            
            
            // Create new item based on 'inc' or 'exp' type
            if(type === 'exp') {     
                newItem = new Expense(ID, des, val);
                
            } else if (type === 'inc') {
                newItem = new Expense(ID, des, val);
            }
            
            // insert the new element in the end of the array
            data.allItems[type].push(newItem);
            return newItem;
        },
        
        testing: function() {
            console.log(data);
        }
        
    };              
})();

// UI CONTROLLER (independente modules)
var UIController = (function() {
    
    var DOMstrings = {
        
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    // SOME CODE
    
    return {
        
        getInput: function() {
            
            return {    
                // properties of an object. It will read  the input values of those fields
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };        
        },
        
        // we are exposing the DOMstrings by the public
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
    
    
})(); // invoke the function


// GLOBAL APP CONTROLLER (independente modules)
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        // add event when the user press the keyword enter
        document.addEventListener('keypress', function(event) {
        
            // which is for others brozers
            if(event.keyCode === 13 || event.which === 13) {
            
                ctrlAddItem();
            
            }      
        });
        
    };
    
    var ctrlAddItem = function() {
        
        var input, newItem;
        
        // 1. Get the filed input data
        // Thats is the public method we can access
        input = UICtrl.getInput();
        
        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
        // 3. Add the item to the UI 
        
        // 4. Calculate the budget
        
        // 5. Display the budget
     
    };
    
    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController); // invoke the function

// without this line the code is not initialize
controller.init();



