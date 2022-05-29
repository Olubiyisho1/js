const myForm = document.querySelector('#my-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmpasswordInput = document.querySelector('#confirmpassword');
const msgInput = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(usernameInput.value === '' || emailInput === '' || passwordInput === '' || confirmpasswordInput === '') {
      msg.innerHTML = 'please enter all fields';
    } else {
        console.log('sucess');
    }
    }
  