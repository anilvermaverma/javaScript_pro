const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

const clock = setInterval(function() {
  const dateNow = new Date();

  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();

  hr = hr.toString().padStart(2, "0");
  min = min.toString().padStart(2, "0");
  sec = sec.toString().padStart(2 , '0');

  const timeString = `${hr}:${min}:${sec}`;
  hour.innerHTML = hr;
  minute.innerHTML = min;
  seconds.innerHTML = sec;
}, 1000);