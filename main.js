const listItems = document.querySelectorAll('.filter__category-list li');
    listItems.forEach((item) => {
    item.addEventListener('click', () => {
        listItems.forEach((li) => li.classList.remove('selected'));
        item.classList.add('selected');

        const previousSelectedText = document.querySelector('.filter__category-qty.selected-text');
        if (previousSelectedText) {
            previousSelectedText.classList.remove('selected-text');
        }

        item.querySelector('.filter__category-qty').classList.add('selected-text');
    });
});

const input = document.getElementById('searchMobInput');
const clearIcon = document.getElementById('clearIcon');

clearIcon.addEventListener('click', () => {
    input.value = '';
});
