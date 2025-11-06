const prev = document.getElementById("prev");
const next = document.getElementById("next");
const image = document.querySelector("img");

let numPhoto = 1;
const maxPhoto = 10;

function slider(photoNum) {
  numPhoto = photoNum;
  image.src = `img/${numPhoto}.jpg`;

  if (numPhoto === maxPhoto) {
    next.setAttribute("disabled", "true");
  } else if (numPhoto === 1) {
    prev.setAttribute("disabled", "true");
  } else {
    next.removeAttribute("disabled");
    prev.removeAttribute("disabled");
  }
}

slider(numPhoto);

next.onclick = () => slider(numPhoto + 1);
prev.onclick = () => slider(numPhoto - 1);
