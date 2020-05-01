const secondsHand = document.querySelector(`.second-hand`);
const minutesHand = document.querySelector(`.minute-hand`);
const hoursHand = document.querySelector(`.hour-hand`);

function setTime () {
  const now = new Date();
  const seconds = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();


  const secondsDegrees = (seconds * 360) / 60;
  const minutesDegrees = (minute * 360) / 60;
  const hoursDegrees = (hour * 360) / 12;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg) translate(0, -50%)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg) translate(0, -50%)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg) translate(0, -50%)`;
}

setInterval(setTime, 1000);
setTime();
