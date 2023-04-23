const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingrEl = document.querySelector('#ingredients');
// console.log(ingrEl);

const elements = ingredients.map(el => {
  const ingrElChild = document.createElement('li');
  ingrElChild.classList.add('item');
  ingrElChild.textContent = el;
  return ingrElChild;
});

// console.log(elements);
ingrEl.append(...elements);
