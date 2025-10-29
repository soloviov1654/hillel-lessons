const insert = document.querySelector("#insert");
const go = document.querySelector("#go");
let link;

insert.addEventListener("click", () => {
  link = prompt("enter your link");
});

go.addEventListener("click", () => {
  if (link) {
    window.location.href = link;
  } else {
    alert("link not found");
  }
});
