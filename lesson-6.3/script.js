// const array = ["q", "w", "e", "r", "t", "y", "q", "w", "e", "r", "t", "y", "q", "w", "e", "r", "t", "y"];
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(`Array before: ${array}`);
const elementToDelete = Number(prompt("What you want to delete?"));


function phraseEditor(array, elementToDelete) {
  
  for (let i = 0; i < array.length; i++) {
      if (elementToDelete === array[i]) {
        array.splice(i, 1);
      }
  }

  return;
}
phraseEditor(array, elementToDelete);
console.log(`Array after: ${array}`);
