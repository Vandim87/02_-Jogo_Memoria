const input = document.querSelector('.login_input');
const button = document.querSelector('.login_button');
const form = document.querySelector('.login-form')
/*
const validateInput = ({target}) = 
{
    if (target.value.length > 2)
        {button.removeAttribute('disabled');}
    else{button.setAttribute('disabled', '');}
}
input.addEventListener('input', validateInput);
*/ 
const handleSubmit = (event) =
{
event.preventDefault();
console.log('logando...');
}
form.addEventListener('submit', handleSubmit);