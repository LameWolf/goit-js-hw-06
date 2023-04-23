const rangeEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFontSize = () => {
  text.style.fontSize = `${rangeEl.value}px`;
};

rangeEl.addEventListener('input', changeFontSize);
