const input = document.querSelector('.login_input');
const button = document.querSelector('.login_button');
const form = document.querySelector('.login-form')

const validateInput = ({target}) => 
{
if (target.value.length > 2)
   {button.removeAttribute('disabled');}
else
   {button.setAttribute('disabled', '');} 
}

const handleSubmit = (Event) => 
{
Event.preventDefault();
localStorage.setItem('player', input.value);
window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('suubmit', handleSubmit);
