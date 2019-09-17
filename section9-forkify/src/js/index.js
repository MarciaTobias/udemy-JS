// conversion give the same like the code
import axios from 'axios';

async function getResults(query) {
    // that one is better than fetch, return automaticaly json
    const key = 'fc9c16f3c0fdccce9fd63e9003aeb034';
    // q cames from the api
    // that is the way to handle the api
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
}
getResults();
