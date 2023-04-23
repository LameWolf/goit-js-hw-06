const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const changeUserName = evt => {
  output.textContent = evt.currentTarget.value;
  //   console.log(evt.currentTarget.value);
  if (!evt.currentTarget.value.trim()) {
    return (output.textContent = 'Anonymous');
  }
};

textInput.addEventListener('input', changeUserName);
