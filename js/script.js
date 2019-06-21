let counter = 0;
let value = 0;
let percent = 0;
let currCount = 0;
let prevCount = 0;
const counterElem = document.getElementById("counter");

start = () => {
  counter = 5;
  percent = 500 / 15;
  const interval = setInterval(() => {
    percent += 100 / 15;
    counter++;
    $("#load").css("width", `${percent}%`);
    counterElem.innerHTML = `${counter}$`;
    if (counter == 15) {
      $(".btn").attr("disabled", false);
      clearInterval(interval);
    }
  }, 300);
};

counterFunction = (number) => {
  currCount = number;
  counter++;
  if (prevCount == 5 && currCount == 15) {
    prevCount = currCount;
    $(".btn").attr("disabled", true);
    start();
  } else {
    prevCount = currCount;
    value = (currCount / 15) * 100;
    $("#load").css("width", `${value}%`);
    counterElem.innerHTML = `${currCount}$`;
  }
};
