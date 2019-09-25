import { elements } from './base';
import { pathToFileURL } from 'url';

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

export const renderResults = recipes => {
    console.log(recipes);
    // the best way to go through to the array (for each)
    recipes.forEach(renderRecipe);
};