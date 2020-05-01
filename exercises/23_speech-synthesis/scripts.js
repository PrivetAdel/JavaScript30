const voicesDropdown = document.querySelector(`[name="voice"]`);
const ranges = document.querySelectorAll(`[type="range"], [name="text"]`);
const speakButton = document.querySelector(`.speak`);
const stopButton = document.querySelector(`.stop`);
const msg = new SpeechSynthesisUtterance();
let voices = [];
msg.text = document.querySelector('[name="text"]').value;


function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>)`)
    .join(``);
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
ranges.forEach(range => range.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
