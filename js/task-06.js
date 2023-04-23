const textInput = document.querySelector('#validation-input');
const numberLength = Number(textInput.dataset.length);

textInput.addEventListener('blur', evt => {
  const valid = evt.currentTarget.value;
  console.log(valid);

  textInput.classList.remove('valid', 'invalid');

  if (valid.length === numberLength) {
    alert('Congratulations!)');
    return textInput.classList.add('valid');
  } else {
    alert('Please enter 6 symbols!');
    return textInput.classList.add('invalid');
  }
});
