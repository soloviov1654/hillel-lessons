const userString = prompt('Enter your phrase');
const userSymbol = [];
console.log(`Your string is: ${userString}`);
while (true) {
  let letter = prompt('Enter your symbol');

  if (letter === null) { 
    break;
  }
  userSymbol.push(letter);
}

function phraseEditor (userString , userSymbol) {
  let modifiedPhrase = userString.split('') ;
  for (let i=0; i<= userSymbol.length -1 ; i++ ) {

    for (let j = 0; j <= userString.length - 1; j++) {
      if (modifiedPhrase[j] === userSymbol[i]) {
        modifiedPhrase.splice(j, 1);
      }
    }

  }
  const result = modifiedPhrase.join('');
  console.log(`Result: ${modifiedPhrase.join('')}`);
  return result;
}
phraseEditor(userString, userSymbol);


