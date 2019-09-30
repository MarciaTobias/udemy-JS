import { elements } from './base';
import { pathToFileURL } from 'url';

// The return is implicity, when is just one line of code in the arrow function
export const getInput = () => elements.searchInput.value;

// clear the results of the search
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

// clear the searh input
export const clearInput = () => {
    elements.searchInput.value = '';
};

/*
// In the first iteration, the accumaltor is zero
For examplo, 'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta]
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
*/

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {

            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;                
        }, 0);

        // return the result
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}; 

// this function will recive um recipe, private function
const renderRecipe  = recipe => {
    const markupp = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResList.insertAdjacentHTML('beforeend', markupp);
}

// Type: 'previous' or 'next'
const createButton = (page, type) => `

    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'left' ? page - 1 : 'right'}"></use>
        </svg>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    </button>
`;

// Private function to show the buttons of pagination
const renderButtons = (page, numResults, resPerPage) => {
    // Calculation to fiend how many pages
    // Round the results to the ceiling
    const pages = Math.ceil(numResults / resPerPage);

    let button;

    if (page === 1 && pages > 1) {
        // button to go to the next page
        button = createButton(page, 'next');

    } else if (page < pages) {
        // Both pages
        button = `
                ${createButton(page, 'prev')}
                ${createButton(page, 'next')}
            `;
        
    } else if (page === pages && pages > 1) {
        button = createButton(page, 'prev');

    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

// The function that will be called whenever we click on one of the buttons.
export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    console.log(recipes);
    // render results of current age
    // it will show the first recipe to the first page (array 0) up to the item 10 in the first page.
    // this will provide to show exactly 10 itens per page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    // the best way to go through to the array (for each)
    // The slice() method returns a shallow copy of a portion of an array into a new array object selected
    // from begin to end (end not included) where begin and end represent the index of items in that array.
    // The original array will not be modified.
    recipes.slice(start, end).forEach(renderRecipe);

    // render pagination button 
    renderButtons(page, recipes.length, resPerPage);
};