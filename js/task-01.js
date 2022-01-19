const cat = document.querySelector('#categories');
const countAllCat = cat.children.length;
console.log(`Number of categories: ${countAllCat}`);

const childrenCats = document.querySelectorAll('.item');
childrenCats.forEach(el =>
  console.log(
    'Category:',
    el.firstElementChild.textContent,
    '\n',
    'Elements:',
    el.lastElementChild.children.length,
  ),
);
