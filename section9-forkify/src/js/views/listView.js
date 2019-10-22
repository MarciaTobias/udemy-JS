import { elements } from './base';

export const renderItem = item => {
    const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
                <p>"${item.unit}"</p>
            </div>
            <p class="shopping__description">"${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
    // Okay now all we have to do is to insert this marker to our elements.shopping adjacent HTML,
    // and we will do this here at before end.
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[date-itemid="${id}"]`);
    item.parentElement.removeChild(item);
};