const form = document.querySelector('.login-form');
// console.log(form);

const handleSubmit = evt => {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  const mail = formElements.email;
  const password = formElements.password;

  const elements = {
    mail: mail.value,
    password: password.value,
  };

  if (mail.value === '' || password.value === '') {
    return alert('Заповніть усі поля!');
  } else if (mail.value !== '' && !password.value.trim()) {
    return alert('Пароль не може складатися тільки з пробілів!');
  }
  console.log(elements);

  evt.currentTarget.reset();
};

form.addEventListener('submit', handleSubmit);
