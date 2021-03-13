const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title"),
  clockAMPM = clockContainer.querySelector(".js-clock__ampm");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  let hours = date.getHours();
  const seconds = date.getSeconds();
  let ampm = "AM";
  if (hours == 0) {
    hours = 12;
  } else if (hours < 24 && hours >= 12) {
    ampm = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  clockAMPM.innerHTML = `${ampm} `;
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
