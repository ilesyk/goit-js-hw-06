const selectors = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

selectors.input.addEventListener('input', fontSizeChange);

function fontSizeChange() {
    const fontSize = selectors.input.value + 'px';
    selectors.text.style.fontSize = fontSize;
}