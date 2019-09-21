// conversion give the same like the code
import axios from 'axios';

// export dedault we simple put an expression
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        // that one is better than fetch, return automaticaly json
        const key = 'fc9c16f3c0fdccce9fd63e9003aeb034';
    
        try {
            // q cames from the api
            // that is the way to handle the api
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            console.log(res);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error)
        }
    }
}
