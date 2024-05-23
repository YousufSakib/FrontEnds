const on_of = document.getElementById("play");
const play_pauseImg = play.querySelector("img");
const refresh = document.getElementById("refresh");
const timeEl = document.querySelector(".time span");
let intv;
let startingTime;
let pauseStart;
let pauseEnd;
let totalPause;
let elapsedTime;
let timeStr;
let isRunning = false;
let is_firstTime = true;
function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}
function init() {
    pauseStart = 0;
    pauseEnd = 0;
    totalPause = 0;
    startingTime = Date.now();
}
const timerFunction = () => {
    elapsedTime = Date.now() - startingTime - totalPause;
    let miliSecond = Math.floor(elapsedTime % 1000);
    timeStr =
        addLeadingZero(Math.floor((elapsedTime / 60 / 60 / 1000) % 60)) +
        ":" +
        addLeadingZero(Math.floor((elapsedTime / 60 / 1000) % 60)) +
        ":" +
        addLeadingZero(Math.floor(elapsedTime / 1000) % 60);
    timeEl.innerText = timeStr;
};

on_of.addEventListener("click", () => {
    if (isRunning === false) {
        if (is_firstTime === false) {
            pauseEnd = Date.now();
            totalPause += pauseEnd - pauseStart;
        } else {
            init();
            is_firstTime = false;
        }
        intv = setInterval(timerFunction, 10);
        play_pauseImg.setAttribute("src", "./imgs/pause-solid.svg");
        isRunning = true;
    } else {
        clearInterval(intv);
        play_pauseImg.setAttribute("src", "./imgs/play-solid.svg");
        pauseStart = Date.now();
        isRunning = false;
    }
});
refresh.addEventListener("click", () => {
    clearInterval(intv);
    timeEl.innerText = "00:00:00";
    play_pauseImg.setAttribute("src", "./imgs/play-solid.svg");
    isRunning = false;
    is_firstTime = true;
    init();
});
