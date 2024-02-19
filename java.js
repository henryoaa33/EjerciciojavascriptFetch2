document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.escuelajs.co/api/v1/categories')
        .then(response => response.json())
        .then(categories => displayCategories(categories))
        .catch(error => console.error('Error fetching categories:', error));
});

function displayCategories(categories) {
    const categoryList = document.getElementById('categoryList');

    categories.forEach(category => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${category.image}" class="card-img-top" alt="${category.name}">
            <div class="card-body">
                <h5 class="card-title">${category.name}</h5>
            </div>
        `;

        col.appendChild(card);
        categoryList.appendChild(col);
    });
}
