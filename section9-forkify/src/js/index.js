import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/SearchView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app 
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

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
    console.log(id);

    if (id) {
        // Prepare UI for changes

        // Create new recipe object
        state.recipe = new Recipe(id);
        
        // TESTING (TO MAKE EXPOSITION TO GLOBAL)
        //window.r = state.recipe;

        try {
             // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            console.log(state.recipe.ingredients);   
            state.recipe.parseIngredients();

            // Calculate serving and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            console.log(state.recipe);
        
        } catch (err) {
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