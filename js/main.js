// deze variabelen daar kan elke functie bij want ze zijn globaal gedeclareerd//
const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");

let seconds = 0;
let minutes = 0;
let running = false;
// let betekend dat het verandert kan worden

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;

startButton.onclick = function(){
    if(running === true){
        return;
    }
    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds === 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds; //dit laat hij zien in de html
    }, 100); //1000 ms is 1 seconde
}

stopButton.onclick = function(){
    clearInterval(timer);
    running = false;
}

resetButton.onclick = function(){
    seconds = 0;
    minutes = 0;

    secondsTimer.innerText = seconds;
    minutesTimer.innerText = minutes;
}

/*Hier begint de slider*/
const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");

slider.value = 2;
rangeValue.innerText = slider.value + "x";

slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}

const paragraph = document.getElementById("js--text");
const image  = document.getElementById("js--img");

//data ophalen

let data = fetch("../data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
            paragraph.innerHTML = echteData.text;
            image.src = echteData.img;
        }
);



