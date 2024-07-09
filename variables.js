// buttons dom variables
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");
const addLapBtn = document.querySelector(".addLapBtn");
// timer variables
let second = 0;
let minute = 0;
let hour = 0;
let millisecond = 0;
let interval;
let lapData = [];

// countdown timer dom variables
const hourSpan = document.querySelector(".hourSpan");
const minuteSpan = document.querySelector(".minuteSpan");
const secondSpan = document.querySelector(".secondSpan");
const millisecondSpan = document.querySelector(".millisecondSpan");
// lap  container dom variables
const lapsContainer = document.querySelector(".lapsContainer");
const lapHourSpan = document.querySelector(".lapHourSpan");
const lapMinuteSpan = document.querySelector(".lapMinuteSpan");
const lapSecondSpan = document.querySelector(".lapSecondSpan");
const lapMillisecondSpan = document.querySelector(".lapMillisecondSpan");

// for footer/ copyright
let year = new Date().getFullYear();
let footerYear = document.querySelector(".footerYear");
footerYear.innerHTML = year > 2024 ? `-${year}` : "";
