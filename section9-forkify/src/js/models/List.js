import uniqid from 'uniqid';

export default class List {
    constructor() {
        // All of the elements in our list will all be stored in this one property, this.items.
        // Each elemenet in the array is an object which will have the count, the unit, and the ingredient.
        this.items = [];
    }

    // We will have an array in which each of the elements is an object, which will have the count, the unit, and the ingredient.
    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        // to return is a good practise
        return item;
    }

    deleteItem(id) {
        // => callback function received the element
        const index = this.items.findIndex(el => el.id === id);
        // We pass in a start index and then how many positions we want to take. And it will then return these elements
        // and delete them from the original array.
        // [2, 4, 8] splice(1,1) => returns 4, original array is [2, 8]
        // [2, 4, 8] slice(1,1) => returns nothing, original array is  [2, 4, 8], we don't mutate the original array
        // [2, 4, 8] splice(1,2) => returns [4, 8] original array is [2]
        // [2, 4, 8] slice(1,2) => returns [4] original array is [2, 4, 8]
        // we just want remove 1 item
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        // Again, what we do here is basically to loop through all the elements in the items and then select
        // the one that has the ID equal to the ID that we passed into the function. Then we return that object
        // and change the count property on it.
        this.items.find(el => el.id === id).count = newCount;
    }
}