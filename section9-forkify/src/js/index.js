// CONTROLLER FILE
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';


/** Global state of the app 
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};
//window.state = state;

/**
 * SEARCH CONTROLLER
 */
 
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();
    //const query = 'pizza';

    if (query) {

        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4) Search for recipes
            // This will return a promise, because of it we put await and azync in the function
            await state.search.getResults();

            // 5) Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something wrong with the search...');
            clearLoader();
        }
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// TESTING 
// window.addEventListener('load', e => {
//     e.preventDefault();
//     controlSearch();
// });

// Adding actionn for the buttons of pagination
elements.searchResPages.addEventListener('click', e => {

    // the closest() method traverses parents (heading toward the document root) of the Element until
    // it finds a node that matches the provided selectorString. Will return itself or the matching ancestor.
    // If no such element exists, it returns null.
    const btn = e.target.closest('.btn-inline');
    // target is exacly here this event happens
    //console.log(e.target);
    //console.log(btn);
    if (btn) {
        // parseInt base 10 (from 0 to 10)
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        //console.log(goToPage);
    }
});

/**
 * RECIPE CONTROLLER
 */

 // used for test
//  const r = new Recipe(47275);
//  r.getRecipe();
//  console.log(r);

const controlRecipe = async () => {
    // windown.location is the entire url
    // Get the id from url and replace the hash for empty space
    // it will return a promise
    const id = window.location.hash.replace('#', '');
    // console.log(id);

    if (id) {
        // Prepare UI for changes
        renderLoader(elements.recipe);

        // Highlight selected search item
        if (state.search) searchView.higlightselected(id);

        // Create new recipe object
        state.recipe = new Recipe(id);
        
        // TESTING (TO MAKE EXPOSITION TO GLOBAL)
        //window.r = state.recipe;

        try {
             // Get recipe data and parse ingredients
            await state.recipe.getRecipe(); 
            state.recipe.parseIngredients();

            // Calculate serving and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            //console.log(state.recipe);
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );
        
        } catch (err) {
            console.log(err);
            alert('Error processinf recipe!');
        }          
    }
};

// Global object. Every moment we change the hash, we call the method controlRecipe
//window.addEventListener('hashchange', controlRecipe);

// Fires when the page is load
//window.addEventListener('load', controlRecipe);

// when thoose tewo events occurs, it will run the method control recipe. Those events are in the array.
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// Event delegation, because button are not there. We are going to test what was clicked, and then react accordingly.
// Macthes method insted of closest.

/**
 * LIST CONTROLLER
 */
const controlList = () => {
    // Create a new list IF there is none yet
    // The list is empty we just have to initialize with new object
    if (!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    // This one is an array and so that seems to loop over this array and then for each element in the ingredients,
    // we're going to add a new element to our list.
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    // this permits to click every part of the shopping list item and to fiend the item id
    const id = e.target.closest('.shopping__item').dataset.itemid;
    
    // Handle the delete button. Matches it will return a boolean value
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        // Delete from state
        state.list.deleteItem(id);
        // Delete from UI
        listView.deleteItem(id);
        // E dot target is the element that was clicked. And so since this is now an input element,
        // we can read the value property of it, which will then contain the number.
    
        // Handle the count update    
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});

/**
 * LIKE CONTROLLER
 */
const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // User has NOT yet liked currrent recipe
    if(!state.likes.isLiked(currentID)) {
        // Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );
        
        // Toggle the like button
        likesView.toggleLikeBtn(true);

        // Add like to UI list
        likesView.renderLike(newLike);
        //console.log(state.likes);
    
    // User HAS liked current recipe
    } else {
        // Remove like to the state
        state.likes.deleteLike(currentID);
        
        // Toggle the like button
        likesView.toggleLikeBtn(false);

        // Remove like to UI list
        //console.log(state.likes);
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();

    // Restore likes
    state.likes.readStorage();

    // Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    // Render the existent likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});


// Handling recipe button clicks.
// Recipe object
elements.recipe.addEventListener('click', e => {
    // if (e.target.matchs('.btn-drecrease)) if the target matches the button decrease,
    // .btn-drecrease * that means any chield of button drecrease.
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // Decrease button is clicked
        if(state.recipe.servings > 1) {
            state.recipe.uppdateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
        
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        // Add ingredients to shoppong list.
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        // Like controller
        controlLike();
    }
});

// window.l = new List();