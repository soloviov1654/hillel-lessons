const arr = [true , 5 , null , 34 , "58" , undefined , 12 , 9]
console.log(arr);

function numSummer (arr) {
  let sum= 0;
  let nums = 0;
  for (let i = 0 ; i< arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])){
      sum += arr[i];
      nums++;
    }
  }
  console.log(sum / nums);
}

numSummer(arr);