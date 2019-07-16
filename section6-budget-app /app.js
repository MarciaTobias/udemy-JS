// BUDGET CONTROLLER
var budgetController = (function() {
    
    // SOME CODE
                        
})();

// UI CONTROLLER (independente modules)
var UIController = (function() {
    
    // SOME CODE
    
})(); // invoke the function


// GLOBAL APP CONTROLLER (independente modules)
var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
        
        // 1. Get the filed input data
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI 
        
        // 4. Calculate the budget
        
        // 5. Display the budget
        
        console.log('It works!')
        
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    // add event when the user press the keyword enter
    document.addEventListener('keypress', function(event) {
        
        // which is for others brozers
        if(event.keyCode === 13 || event.which === 13) {
            
            ctrlAddItem();
            
        }      
    });

})(budgetController, UIController); // invoke the function



