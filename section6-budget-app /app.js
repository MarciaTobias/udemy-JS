// BUDGET CONTROLLER
var budgetController = (function() {
    
    // SOME CODE
                        
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
    
    var DOM = UICtrl.getDOMstrings();
    
    var ctrlAddItem = function() {
        
        // 1. Get the filed input data
        // Thats is the public method we can access
        var input = UICtrl.getInput();
        console.log(input);
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI 
        
        // 4. Calculate the budget
        
        // 5. Display the budget
        
     
        
    }
    
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    // add event when the user press the keyword enter
    document.addEventListener('keypress', function(event) {
        
        // which is for others brozers
        if(event.keyCode === 13 || event.which === 13) {
            
            ctrlAddItem();
            
        }      
    });

})(budgetController, UIController); // invoke the function



