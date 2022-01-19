const textInput = document.querySelector('#validation-input');
console.log(textInput);
const numberLength = Number(textInput.dataset.length);

// textInput.addEventListener('focus', () => {
//   textInput.value = 'This input has focus';
// });

textInput.addEventListener('blur', event => {
  const valid = event.currentTarget.value;
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
