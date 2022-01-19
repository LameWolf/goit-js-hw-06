const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const changeUserName = event => {
  output.textContent = event.currentTarget.value;
  if (!event.currentTarget.value.trim()) {
    return (output.textContent = 'Anonymous');
  }
};

input.addEventListener('input', changeUserName);
