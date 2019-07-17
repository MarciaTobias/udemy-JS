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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };
    
    return {
        
        getInput: function() {
            
            return {    
                // Properties of an object. It will read  the input values of those fields
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                // Converts the string to a float number
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };        
        },
        
        addListItem: function(obj, type) {
            
            var html, newHTML, element;
            
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                      
            } else if (type === 'exp') {
                
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace the placeholder text with some actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);
            
            // Insert the hTML into the DOM
            
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
            
        },
        
        // Clean the fields after insert a new inc or exp
        clearFiels: function() {
            
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue); 
            
            // this is trick to use slice in a list(fields is a list)
            fieldsArr = Array.prototype.slice.call(fields);
            
            // callback function
            fieldsArr.forEach(function(current, index, array) {  
                current.value = ""; 
                
            }); 
            
            // Focus method to put focus in the first field.
            fieldsArr[0].focus();
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
    
    var updateBudget = function() {
        
        // 1. Calculate the budget
        
        // 2. Return the budget
        
        // 3. Display the budget
        
    }
    
    var ctrlAddItem = function() {
        
        var input, newItem;
        
        // 1. Get the filed input data
        // That is the public method we can access
        input = UICtrl.getInput();
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFiels();    

            // 5. Calculate and update budget
            updateBudget();   
        }
    };
    
    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController); // invoke the function

// Without this line the code is not initialize
controller.init();



