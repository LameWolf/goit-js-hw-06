let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

const decrementValue = () => {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
  console.log(counterValue);
};

const incrementValue = () => {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
  console.log(counterValue);
};

refs.btnIncrement.addEventListener('click', incrementValue);
refs.btnDecrement.addEventListener('click', decrementValue);
