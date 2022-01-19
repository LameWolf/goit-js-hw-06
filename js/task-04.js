let counterValue = 0;

const refs = {
  btnCountMinus: document.querySelector('button[data-action="decrement"]'),
  btnCountPlus: document.querySelector('button[data-action="increment"]'),
  currentNumber: document.querySelector('#value'),
};

const decrement = () => {
  counterValue -= 1;
  refs.currentNumber.textContent = counterValue;
  console.log(counterValue);
};

const increment = () => {
  counterValue += 1;
  refs.currentNumber.textContent = counterValue;
  console.log(counterValue);
};

refs.btnCountMinus.addEventListener('click', decrement);
refs.btnCountPlus.addEventListener('click', increment);
