const categories = document.querySelector('#categories');
const countAllCategories = categories.children.length;
console.log(`Number of categories: ${countAllCategories}`);

const childrenCategories = document.querySelectorAll('.item');
childrenCategories.forEach(el =>
  console.log(
    'Category:',
    el.firstElementChild.textContent,
    '\n',
    'Elements:',
    el.lastElementChild.children.length,
  ),
);
