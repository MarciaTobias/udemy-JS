export const elements = {
    searchForm: document.querySelector('.search'),
    // we an elment with a property called search__input, which contains this DOM element here
    searchRes: document.querySelector('.results'),
    searchInput: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list')
};

export const elementsStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementsStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementsStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};