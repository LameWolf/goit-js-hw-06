const getInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFontSize = () => {
  text.style.fontSize = `${getInput.value}px`;
};

getInput.addEventListener('input', changeFontSize);
