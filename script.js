const hour_ele = document.querySelector(".hr");
const min_ele = document.querySelector(".min");
const sec_ele = document.querySelector(".sec");
const startBtn = document.querySelector("#start");
const stop_Btn = document.querySelector("#stop");
const reset_Btn = document.querySelector("#reset");
const main_container = document.querySelector("#main-container");
let h = 0;
let m = 0;
let s = 0;
let id = 0;
let startChecker = false;
hour_ele.innerHTML = `${h} hr `;
min_ele.innerHTML = `${m} min `;
sec_ele.innerHTML = ` ${s} sec`;

startBtn.addEventListener("click", function () {
  if (startChecker == false) {
    main_container.style.backgroundColor = "#D5F5E3";
    id = setInterval(function () {
      s = s + 1;
      if (s == 60) {
        s = 0;
        m = m + 1;
        if (m == 60) {
          s = 0;
          m = 0;
          h = h + 1;
        }
      }
      hour_ele.innerHTML = `${h} hr `;
      min_ele.innerHTML = `${m} min `;
      sec_ele.innerHTML = ` ${s} sec`;
      main_container.style.backgroundColor = "#D5F5E3";
    }, 1000);
    startChecker = true;
  }
});

stop_Btn.addEventListener("click", function () {
  clearInterval(id);
  hour_ele.innerHTML = `${h} hr `;
  min_ele.innerHTML = `${m} min `;
  sec_ele.innerHTML = ` ${s} sec`;
  startChecker = false;
  main_container.style.backgroundColor = "#FADBD8";
  //   #FADBD8
});

reset_Btn.addEventListener("click", function () {
  clearInterval(id);
  h = m = s = 0;
  hour_ele.innerHTML = `${h} hr `;
  min_ele.innerHTML = `${m} min `;
  sec_ele.innerHTML = ` ${s} sec`;
  startChecker = false;
  main_container.style.backgroundColor = "#FCF3CF";
});
