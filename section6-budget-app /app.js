// BUDGET CONTROLLER
var budgetController = (function() {
    
    // Function constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    Expense.prototype.calculatePercentage = function(totalIncome) {
        
        // Integer percentage value
        this.percentage = Math.round((this.value / totalIncome) * 100);
        
        
    };
    
    // Function constructor
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }; 
    
    // Private function to calculate the total of incomes or expenses
    var calculateTotal = function(type) {
        
        var sum = 0;
        
        // Loop to over in array, this acpets call back function
        data.allItems[type].forEach(function(cur) {
            
            // cur refers to inc or exp
            sum += cur.value;
        });
        
        data.totals[type] = sum;
    };
    
    // Data structure ready to receive data, global data
    var data = {   
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1 // -1 is not existence
    };
    
    return {
        
        // It will save the information inputed by the user
        addItem: function(type, des, val) {
            
            var newItem, ID;
            
            // It will verify if the array is empty
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
                newItem = new Income(ID, des, val);
            }
            
            // Insert the new element in the end of the array
            data.allItems[type].push(newItem);
            return newItem;
        },
        
        // Method that will be call from budget control
        deleteItem: function(type, id) {
            
            // id = 3
            //dataa..Items[typpe][id];
            
            // ids = [1 2 3 6 8]
            
            var ids, index;
            
            ids = data.allItems[type].map(function(current) {
                 
                return current.id;
                
            });
            
            index = ids.indexOf(id);
            
            if (index !== -1) {
                
                // the array of objects
                // splice, first argument the index, second, all many we want delete
                data.allItems[type].splice(index, 1);
            }
            
        },
        
        calculateBudget: function() {
          
            // 1. Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // 2. Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // Calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                
                // 3. Calculate the percentage of income taht we spent
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                
                } else {
                data.percentage = -1;
            }
        },
        
        calculatePercentages: function() {
            
            /* 
            a = 20
            b = 10
            C = 40
            income = 100
            a = 20 / 100 = 20%
            b = 10 / 100 = 10%
            c = 40 / 100 = 40%
            
            */
        },
        
        // Method to return data
        getBudget: function() {
          
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
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
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    };
    
    return {
        
        getInput: function() {
            
            return { 
                
                // Properties of an object. It will read  the input values of those fields
                // Will be either inc or exp
                type: document.querySelector(DOMstrings.inputType).value, 
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
                
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                      
            } else if (type === 'exp') {
                
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace the placeholder text with some actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);
            
            // Insert the hTML into the DOM
            
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
            
        },
        
        deleteListemItem: function(selectorID) {
            
            // thats is the item we want remove
            var el = document.getElementById(selectorID)
            // we can just remove the chield
            el.parentNode.removeChild(el);
            
        },
        
        // Clean the fields after insert a new inc or exp
        clearFiels: function() {
            
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue); 
            
            // This is trick to use slice in a list(fields is a list)
            fieldsArr = Array.prototype.slice.call(fields);
            
            // Callback function
            fieldsArr.forEach(function(current, index, array) {  
                current.value = ""; 
                
            }); 
            
            // Focus method to put focus in the first field.
            fieldsArr[0].focus();
        },
        
        // Method to display the values pf budget, total income, total expense and percentage to the user.
        displayBudget: function(obj) {
            
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.budget.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.budget.totalExp;
         
            if (obj.percentage > 0) {
                
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';     
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
            
        },
        
        // We are exposing the DOMstrings by the public
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
    
    
})(); // Invoke the function


// GLOBAL APP CONTROLLER (independente modules)
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        // Add event when the user press the keyword enter
        document.addEventListener('keypress', function(event) {
        
            // Which is for others brozers
            if(event.keyCode === 13 || event.which === 13) {
            
                ctrlAddItem();      
            }      
        }); 
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };
        
    var updateBudget = function() {
        
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the budget
        UICtrl.displayBudget(budget);
        
    };
    
    var updatePercentages = function() {
        
        // 1. Calculate percentages
        
        // 2. Read percentages from the budget controller
        
        // 3. Update the UI with new percentages
        
    };
    
    var ctrlAddItem = function() {
        
        var input, newItem;
        
        // That is the public method we can access
        // 1. Get the filed input data
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
            
            // 6. Calculate and update percentages
            updatePercentages();
        }
    };
    
    // Method do delete item
    var ctrlDeleteItem = function(event) {
        
        var itemID, splitID, type, ID;
        
        // this is transversion, when hits the icon to delete it will get the parent
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;  
        
        if(itemID) {
            
            // inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // 1. Detele the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            
            // 2. Delete the item from UI
            UICtrl.deleteListemItem(itemID);
            
            // 3. Update and show the new budget
            updateBudget();
            
            // 4. Calculate and update percentages
            updatePercentages();
        }
    };
    
    // It will run in the beggning of the application
    return {
        init: function() {
            console.log('Application has started');
            // Everuthing will be set to 0
             UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };

})(budgetController, UIController); // Invoke the function

// Without this line the code is not initialize
controller.init();



