const email= document.getElementById('email');
const submit= document.getElementById('submit');
const error= document.getElementById('feedback__input--error');
const success= document.getElementById('feedback__input--success');


success.style.visibility = 'visible';
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    success.style.display='block';
   setTimeout(function () {
     success.style.display='none';
   }, 2000);

  })
  email.addEventListener('input', function(e)  {
    submit.disabled = true;
    error.style.display = 'block';
    if (validateEmail(e.target.value)){
      submit.disabled = false;
      error.style.display = 'none';

    }

  });





