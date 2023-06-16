function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectors = {
  view: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  text: document.querySelector(".color"),
};
selectors.button.addEventListener("click", colorChange);
function colorChange() {
  const color = (selectors.view.style.backgroundColor = getRandomHexColor());
  selectors.text.textContent = color;
}
