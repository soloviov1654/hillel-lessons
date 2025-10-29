const parent = document.querySelector(".container");

parent.addEventListener('click', (event) => {
  alert(`you click on: ${event.target.textContent}`)
});