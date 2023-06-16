const categoriesNumber = document.querySelector("#categories").children.length;
console.log("Number of categories: ", categoriesNumber);

const everyCategory = document.querySelector("#categories").children;
[...everyCategory].forEach((child) => {
  console.log("Category: ", child.firstElementChild.textContent);
  console.log("Elements: ", child.lastElementChild.children.length);
});
