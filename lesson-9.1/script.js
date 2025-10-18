let ladder = {

    step: 0,

  up: function (step) { 
    this.step++
    return this
  },
  down: function (step) { 
    this.step--
    return this
  },
  showStep: function () { 
    console.log(this.step)
    return this
  }
};