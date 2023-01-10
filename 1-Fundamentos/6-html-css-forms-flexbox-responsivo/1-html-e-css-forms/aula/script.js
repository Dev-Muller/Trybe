// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (event) => {
  event.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', (event) => {
  event.preventDefault();
});

INPUT_TEXT.addEventListener('click', (event) => {
  const chracter = event.key;
  if (chracter !== 'a') {
    event.preventDefault();
  }
});
