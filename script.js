// disable selected buttons depending on parameter
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

// start stopwatch
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

// stop stopwatch
function stopTimer() {
  clearInterval(interval);
}

// reset stopwatch
function resetTimer() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  manipulateDom(hour, minute, second, millisecond);
}

// add lap
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

// manipulate dom and change dymaic values
function manipulateDom(phour, pminute, psecond, pmillisecond) {
  hourSpan.innerHTML = String(phour).padStart(2, "0");
  minuteSpan.innerHTML = String(pminute).padStart(2, "0");
  secondSpan.innerHTML = String(psecond).padStart(2, "0");
  millisecondSpan.innerHTML = String(pmillisecond).padStart(2, "0");
}

// create a lap container with lap data
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

// when click start btn
startBtn.addEventListener("click", () => {
  checkBtns("start");
  startTimer();
});

// when click stop btn
stopBtn.addEventListener("click", () => {
  checkBtns("stop");
  stopTimer();
});

//  when click reset btn
resetBtn.addEventListener("click", () => {
  let confirmation = confirm("Are you sure you want to reset?");
  if (confirmation) {
    resetTimer();
    //   for reset leap data to when reset button clickked
    lapData = [];
    lapContentCreator(lapData);
  }
});

// when double click reset btn
resetBtn.addEventListener("dblclick", () => {
  lapData = [];
  lapContentCreator(lapData);
});

addLapBtn.addEventListener("click", () => {
  addLap();
});

// when page on load
lapContentCreator(lapData);
checkBtns("stop");
