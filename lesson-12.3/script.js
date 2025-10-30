const parent = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  li.className = "wrapper";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  li.textContent = input.value + " ";
  li.appendChild(deleteBtn);
  parent.appendChild(li);
  input.value = "";
});

parent.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});