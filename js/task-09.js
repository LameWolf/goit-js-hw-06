const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.body;
const btnChangeColor = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

const changeBodyColor = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  currentColor.textContent = color;
};

btnChangeColor.addEventListener('click', changeBodyColor);
