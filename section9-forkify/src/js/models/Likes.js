export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = { id, title, author, img};
        this.likes.push(like);
        return like;
    }

    deleteLike(id) {
        // => callback function received the element
        const index = this.likes.findIndex(el => el.id === id);
        // We pass in a start index and then how many positions we want to take. And it will then return these elements
        // and delete them from the original array.
        // [2, 4, 8] splice(1,1) => returns 4, original array is [2, 8]
        // [2, 4, 8] slice(1,1) => returns nothing, original array is  [2, 4, 8], we don't mutate the original array
        // [2, 4, 8] splice(1,2) => returns [4, 8] original array is [2]
        // [2, 4, 8] slice(1,2) => returns [4] original array is [2, 4, 8]
        // we just want remove 1 item
        this.likes.splice(index, 1);
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }
}