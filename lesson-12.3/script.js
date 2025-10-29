const parent = document.querySelector("ul");
const addBtn = document.querySelector("#add");
const input = document.querySelector("input");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "wrapper";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  li.textContent = input.value;
  li.appendChild(deleteBtn);
  parent.appendChild(li);
  input.value = "";
  
  deleteBtn.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
