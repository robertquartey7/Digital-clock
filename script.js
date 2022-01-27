function showTime() {
  const time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  let am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let currentTime = `${hour}:${minute}:${second}  ${am_pm}` ;
  window.document.querySelector("#p-time").innerHTML = currentTime;
}

setInterval(showTime, 1000);
function showDay() {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const day = date.toLocaleDateString("en-US", options);

  document.querySelector("#p-current-day").innerHTML = day;
}
setInterval(showDay, 1000);
