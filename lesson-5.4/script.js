const num = Number(prompt('Enter your number'))
let isPrime = true;

if (num <= 1 ) {
  isPrime = false;
} else {
  for (let i = 2;i< num;i++) {
    if (num % i ===0) {
      isPrime = false
      break;
    }
  }
}

if (isPrime) {
  console.log ('Number is prime')
} else {
  console.log ('Number not prime')
}