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
        const unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tbsp', 'tbsp', 'cup', 'pound'];

        // every map interation should return something
        const newIngredients = this.ingredients.map(el => {
            // 1) Uniform units
            // convert to lower case
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                // that will replace the itens in the first aray for the respect item in the second array
                ingredient = ingredient.replace(unit, unitShort[i]);
            });

            // 2) Remove parentheses
            // this is called regular expression, we are going to replace evrything in the pareceteses for empty
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 3) Parse ingredients into count, unit and ingredient

            // every map interation should return something
            return ingredient;
        });
        
        this.ingredients = newIngredients;

    }
}