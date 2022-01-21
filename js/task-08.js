const form = document.querySelector('.login-form');
// console.log(form);
const userData = {};

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    console.log('Все поля должны быть заполнены!');
    alert('Все поля должны быть заполнены!');
  } else {
    userData.email = email.value;
    userData.password = password.value;
    console.log(userData);
    event.currentTarget.reset();
  }
};

form.addEventListener('submit', handleSubmit);
