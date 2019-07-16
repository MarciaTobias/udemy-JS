var budgetController = (function() {
    
    // x and publicTest are closures
                        
    var x = 23;
    var add = function(a) {
    
    return x + a;
}

return {
    
    publicTest: function(b) {
         return add(b);
    }
}
                        
})();

// independente modules
var UIController = (function() {
    
})(); // invoke the function


// independente modules
var controller = (function(budgetCtrl, UICtrl) {
    
    var z = budgetCtrl.publicTest(5);
    
    // that is the only way that from the outside we can have access to z.
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
})(budgetController, UIController); // invoke the function
