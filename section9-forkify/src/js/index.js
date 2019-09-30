import Search from './modules/Search';
import * as searchView from './views/SearchView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app 
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if (query) {

        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4) Search for recipes
        // This will return a promise, because of it we put await and azync in the function
        await state.search.getResults();

        // 5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

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
