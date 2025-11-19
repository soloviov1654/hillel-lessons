class Timer {
  constructor(elem) {
    this.element = document.querySelector(elem);
    this.intervalId = null;
  }

  startTimer = () => {
    let mins = 2;
    let milisec = 99;

    this.intervalId = setInterval(() => {
      this.element.textContent = `
      ${mins.toString().padStart(2, "0")}:${milisec.toString().padStart(2, "0")}`;

      milisec--;

      if (milisec < 0) {
        milisec = 99;
        mins--;
      }

      if (mins < 0) {
        clearInterval(this.intervalId);
      }
    }, 10);
  };
}

const timer = new Timer(".timer");
document.querySelector(".start").addEventListener("click", timer.startTimer);
