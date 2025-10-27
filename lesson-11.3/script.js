const btn = document.querySelector("button");
const newImg = document.createElement("img");
const min = 1;
const max = 10;
const parent = btn.parentNode;
parent.insertBefore(newImg, btn);

function showImg() {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    newImg.setAttribute("src", `img/${randNum}.jpg`);
    console.log(randNum);
}
btn.addEventListener("click", showImg);

showImg();