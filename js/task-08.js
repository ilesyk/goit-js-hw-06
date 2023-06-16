const form = document.querySelector(".login-form");
form.addEventListener("submit", logingIn);

function logingIn(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (!email.value || !password.value) {
    return alert("All fields must be filled!");
  }
  const logInfo = {
    email: email.value,
    password: password.value,
  };
  console.log(logInfo);
  form.reset();
}
