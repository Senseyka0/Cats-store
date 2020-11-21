const form = document.querySelector(".footer__form");
const emailForm = document.querySelector(".footer__form-input");
const buttonForm = document.querySelector(".footer__form-button");

const validateEmail = (e) => {
   e.preventDefault();

   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   if (!reg.test(emailForm.value.trim())) {
      alert("Введите корректный e-mail");
      return false;
   } else {
      emailForm.value = "";
      alert("Спасибо за подписку!");
   }
};

buttonForm.addEventListener("click", validateEmail);
