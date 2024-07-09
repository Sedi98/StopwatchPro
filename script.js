function checkBtns(param) {
  if (param === "start") {
    startBtn.setAttribute("disabled", "true");
    resetBtn.setAttribute("disabled", "true");
    addLapBtn.removeAttribute("disabled");
  } else if (param === "stop") {
    startBtn.removeAttribute("disabled");
    resetBtn.removeAttribute("disabled");
    addLapBtn.setAttribute("disabled", "true");
  }
}

// function enableBtns() {
//   startBtn.removeAttribute("disabled");

//   resetBtn.removeAttribute("disabled");
// }

function startTimer() {
 

  interval = setInterval(() => {
    millisecond++;
    if (millisecond == 100) {
      millisecond = 0;
      second++;
    }

    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }

    manipulateDom(hour, minute, second, millisecond);
  }, 10);
}

function stopTimer() {
 
  clearInterval(interval);
}

function resetTimer() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  manipulateDom(hour, minute, second, millisecond);
}

function addLap() {
  
  let lapHour = hour;
  let lapMinute = minute;
  let lapSecond = second;
  let lapMillisecond = millisecond;

  let time = `${String(lapHour).padStart(2, "0")}:${String(lapMinute).padStart(
    2,
    "0"
  )}:${String(lapSecond).padStart(2, "0")}:${String(lapMillisecond).padStart(
    2,
    "0"
  )}`;
  lapData.push(time);
  lapContentCreator(lapData);
}

function manipulateDom(phour, pminute, psecond, pmillisecond) {
  
  hourSpan.innerHTML = String(phour).padStart(2, "0");
  minuteSpan.innerHTML = String(pminute).padStart(2, "0");
  secondSpan.innerHTML = String(psecond).padStart(2, "0");
  millisecondSpan.innerHTML = String(pmillisecond).padStart(2, "0");
}

function lapContentCreator(array) {
  lapsContainer.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    lapsContainer.innerHTML += `<div class="lapDiv">
            <p class="lapIndex">${String(i + 1).padStart(2, "0")}</p>
            <p class="lapTime">
                ${array[i]}
            </p>

        </div>`;
  }
}

startBtn.addEventListener("click", () => {
  checkBtns("start");
  startTimer();
});

stopBtn.addEventListener("click", () => {
  checkBtns("stop");
  stopTimer();
});

resetBtn.addEventListener("click", () => {
  resetTimer();
});

resetBtn.addEventListener("dblclick", () => {
  lapData = [];
  lapContentCreator(lapData);
});

addLapBtn.addEventListener("click", () => {
  addLap();
});

lapContentCreator(lapData);
checkBtns("stop");
