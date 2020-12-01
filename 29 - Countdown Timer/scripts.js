let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
  clearInterval(countdown)
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secLeft = Math.round((then - Date.now()) / 1000);
    if (secLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secLeft);
  }, 1000);
}

function displayTimeLeft(sec) {
  const minutes = Math.floor(sec / 60);
  const reminderSeconds = sec % 60;
  const display = `${minutes}:${
    reminderSeconds < 10 ? "0" : ""
  }${reminderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const min = end.getMinutes();
  endTime.textContent = `Be back at ${hour}:${min}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', (e)=> {
  e.preventDetauld();
  const mins = this.minutes.value;
  this.resizeTo();
  const sec = mins*60;
  timer(sec);
})