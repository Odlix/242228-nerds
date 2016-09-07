
  var link = document.querySelector(".btn-address");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");

  var login = popup.querySelector("[name=login]");
  var form = popup.querySelector("form");
  var email = popup.querySelector("[name=email]");
  var text = popup.querySelector("[name=all-text]");

  try {
    var storageLogin = localStorage.getItem("login");
    var storageEmail = localStorage.getItem("email");
  } catch (exception) {}


  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");

    if (storageLogin || storageEmail) {
      login.value = storageLogin;
      email.value = storageEmail;
      text.focus();
    } else {
      login.focus();
    }

  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !email.value || !text.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      }
    }
  });
