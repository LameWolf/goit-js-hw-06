const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
  btnEl: document.querySelector('.change-color'),
  curColorEl: document.querySelector('.color'),
};

const changeBodyColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  refs.curColorEl.textContent = newColor;
};

refs.btnEl.addEventListener('click', changeBodyColor);
