const sum = (function(){
  let add = 0;
  return function (userNum) {
    add += userNum
    return add 
  }
})();

