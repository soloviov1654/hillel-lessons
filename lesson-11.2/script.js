const text = document.querySelector('h2');
const btn = document.querySelector('button');

btn.addEventListener('click', () => text.classList.toggle('red'))