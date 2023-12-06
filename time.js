const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".seconds");
const amPm = document.querySelector(".am-pm");

function time() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  if (h >= 12) {
    amPm.innerText = "PM";
  } else {
    amPm.innerText = "AM";
  }
}
setInterval(time, 1000);
