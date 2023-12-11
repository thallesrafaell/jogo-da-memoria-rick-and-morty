const input = document.querySelector(".login_input");
const button = document.querySelector(".login_buttom");
const form = document.querySelector(".form_login");

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  } else {
    button.setAttribute("disabled", "");
  }
};

const handlerSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("player", input.value);
  window.location = "pages/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handlerSubmit);
