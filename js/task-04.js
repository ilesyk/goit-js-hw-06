const selectors = {
  counter: document.querySelector("#value"),
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

selectors.increment.addEventListener("click", addingClick);
function addingClick() {
  counterValue += 1;
  selectors.counter.textContent = counterValue;
}

selectors.decrement.addEventListener("click", removingClick);
function removingClick() {
  counterValue -= 1;
  selectors.counter.textContent = counterValue;
}
