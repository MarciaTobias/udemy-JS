import { elements } from './base';

// The return is implicity, when is just one line of code in the arrow function
export const getInput = () => elements.searchInput.value;

// clear the results of the search
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

// clear the searh input
export const clearInput = () => {
    elements.searchInput.value = '';
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
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResList.insertAdjacentHTML('beforeend', markupp);
}

export const renderResults = recipes => {
    console.log(recipes);
    // the best way to go through to the array (for each)
    recipes.forEach(renderRecipe);
};