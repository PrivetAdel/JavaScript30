const timeNodes = Array.from(document.querySelectorAll(`[data-time]`));
const timeList = document.querySelector(`ul`);

const totalSeconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [hours, mins, secs] = timeCode.split(`:`).map(parseFloat);
    return (hours * 3600) + (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

  let secondsLeft = totalSeconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

function renderTotalTime() {
  const totalTime = `
    <div class="full-length">
      <span>Total time: ${hours}:${mins}:${secondsLeft}</span>
    </div>
  `;
  timeList.insertAdjacentHTML(`afterend`, totalTime);
}
renderTotalTime();
