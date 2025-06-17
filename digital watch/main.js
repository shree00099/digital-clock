// TAB LOGIC
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hide all
    tabContents.forEach(tab => tab.classList.add('hidden'));
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.remove('hidden');
    button.classList.add('active');
  });
});

// DIGITAL CLOCK
setInterval(() => {
  const now = new Date();
  document.getElementById('digitalClock').textContent = now.toLocaleTimeString();
}, 1000);

// TIMER
let timerInterval;
function startTimer() {
  let time = parseInt(document.getElementById('timerInput').value);
  if (isNaN(time) || time <= 0) {
    alert("Enter valid seconds");
    return;
  }

  clearInterval(timerInterval);
  updateTimerDisplay(time);
  timerInterval = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(timerInterval);
      document.getElementById('timerDisplay').textContent = "00:00";
      alert("⏰ Time's up!");
    } else {
      updateTimerDisplay(time);
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById('timerDisplay').textContent = `${mins}:${secs}`;
}

// STOPWATCH
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
  if (stopwatchInterval) return;

  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    updateStopwatchDisplay();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const hrs = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
  const mins = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
  const secs = String(stopwatchTime % 60).padStart(2, '0');
  document.getElementById('stopwatchDisplay').textContent = `${hrs}:${mins}:${secs}`;
}
