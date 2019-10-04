// conversion give the same like the code
import axios from 'axios';
import { key } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            // it will return a promise
            const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
            //console.log(res);
        } catch (error) {
            console.log(error);
            alert('Some went wrong :(');
        }
    }

    calcTime() {
        // Assuming that we need 15 mn for each 3 ingredients. This is a rougly estimation
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        // 2 arrays, one array we will have the units as they appear in our ingredients, and in the second array,
        // we will have them written, exactly like we want them to be.
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'ozs', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tbsp', 'tbsp', 'cup', 'pound'];

        // every map interation should return something
        const newIngredients = this.ingredients.map(el => {
            // 1) Uniform units
            // convert to lower case
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                // that will replace the itens in the first aray for the respect item in the second array
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            // 2) Remove parentheses
            // this is called regular expression, we are going to replace evrything in the pareceteses for empty
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 3) Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            // it will test if that element (el2) is inside of the array and will return the position
            // That's the only way to find the position of the unit, when we don't really know, hich unit we are looking for
            const unitIndex = arrIng.findIndex(el2 => {unitsShort.includes(el2)});

            // Global variable, that way be accessed outside of the scope
            let objIng;
            
            // -1 if the result of the function above is nothing
            if (unitIndex > -1) {
        
                // There is a unit
                // Ex. 4 1/2 cups, arrCount is [4, 1/2] -- they are strings
                // Ex. 4 cups, arrCount is [4]
                const arrCount = arrIng.slice(0, unitIndex); 
                let count;

                if (arrCount.length === 1) {
                    // it will change the - for + and evaluate in the sequence
                    count = eval([0].replace('-', '+'));
                } else {
                    // it will add and evaluete them.  (4 + 1/2 = 4.5)
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                }

            } else if (parseInt(arrIng[0], 10)) {
                // There is No iunit, but 1st element is a number
                objIng = {
                     count: (parseInt(arrIng[0], 10)),
                     unit: '',
                     // which slice will count all ingredients from the beggining to end of the array (except the item at index 1)
                     // join will put all itens together in a string
                     ingredient: arrIng.slice(1).join(' ')
                }

            } else if (unitIndex === -1) {
                // There is NO unit and NO number in the 1st position
                objIng = {
                    count: 1, 
                    unit: '',
                    // it will create automaticaly the ingredient property
                    ingredient
                }
            }
            // every map interation should return something
            return objIng;
        });
        
        this.ingredients = newIngredients;

    }
}