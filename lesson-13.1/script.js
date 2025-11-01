const form = document.querySelector('form');
const span = document.querySelectorAll('span')


function checkValue (value , regExp , span) {
    if (!regExp.test(value)) {
        span.classList.add("visible");
    } else {
        span.classList.remove("visible");
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nameInput = form.querySelector('#exampleFormControlInput1');
    const textInput = form.querySelector('#exampleFormControlTextarea1');
    const telInput = form.querySelector('#exampleFormControlInput2');
    const emailInput = form.querySelector('#exampleFormControlInput3');
    checkValue(nameInput.value, /^[A-Za-zА-Яа-яЁё]+$/i,span[0])
    checkValue(textInput.value, /^.{5,}$/im,span[1])
    checkValue(telInput.value, /^\+380\d{9}$/,span[2])
    checkValue(emailInput.value, /^[^@\s]+@[^@\s]+\.[^@\s]+$/i,span[3])


    const formData = new FormData(event.target);
    const formObj = {};
    formData.forEach((value, key) => formObj[key] = value);
    console.log(formObj);
})