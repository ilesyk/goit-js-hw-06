const input = document.querySelector("#validation-input");
input.addEventListener("blur", inputChecker);

function inputChecker(evt) {
  if (
    evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)
  ) {
    evt.currentTarget.classList.remove("invalid");
    evt.currentTarget.classList.add("valid");
  } else if (!evt.currentTarget.value) {
    evt.currentTarget.classList.remove("valid");
    evt.currentTarget.classList.remove("invalid");
  } else {
    evt.currentTarget.classList.remove("valid");
    evt.currentTarget.classList.add("invalid");
  }
}
