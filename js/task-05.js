const selectors = {
  input: document.querySelector("#name-input"),
  title: document.querySelector("#name-output"),
};

selectors.input.addEventListener("input", changingText);

function changingText(evt) {
  if (!evt.currentTarget.value) {
    return (selectors.title.textContent = "Anonymous");
  } else {
    selectors.title.textContent = evt.currentTarget.value;
  }
}
