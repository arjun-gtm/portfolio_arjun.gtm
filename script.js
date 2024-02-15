const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Future date to count down to
const futureDate = new Date("2024-03-17T00:00:00"); // Desired future date

// Function to update the countdown
function updateCountdown() {
  const currentDate = new Date();
  const difference = futureDate - currentDate;

  if (difference <= 0) {
    clearInterval(timeFunction);
    return;
  }

  let totalSeconds = Math.floor(difference / 1000);
  let totalMinutes = Math.floor(totalSeconds / 60);
  let totalHours = Math.floor(totalMinutes / 60);
  let totalDays = Math.floor(totalHours / 24);

  const secondsLeft = totalSeconds % 60;
  const minutesLeft = totalMinutes % 60;
  const hoursLeft = totalHours % 24;
  const daysLeft = totalDays;

  seconds.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
  minutes.textContent = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
  hours.textContent = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
  days.textContent = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
}

// Initial call to update the countdown
updateCountdown();

// Update the countdown every second
const timeFunction = setInterval(updateCountdown, 1000);
