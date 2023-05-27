const htmlDays = document.getElementById('count-days')
const htmlHours = document.getElementById('count-hours')
const htmlMinutes = document.getElementById('count-minutes')
const htmlSeconds = document.getElementById('count-seconds')

const newYearEve = new Date('1 Jan 2024 6:00 PM');

function calculateNewYear(){

    let currentDate = new Date();    
    
    let timeDiff = (newYearEve-currentDate)/1000;
    
    let days = formatTime(Math.floor(timeDiff/3600/24));
    let hours = formatTime(Math.floor(timeDiff/3600 % 24));
    let minutes = formatTime(Math.floor(timeDiff/60 % 60));
    let seconds = formatTime(Math.floor(timeDiff % 60));
    
    htmlDays.innerHTML = days;
    htmlHours.innerHTML = hours;
    htmlMinutes.innerHTML = minutes;
    htmlSeconds.innerHTML = seconds;
}

function formatTime(time){
    return time<10? `0${time}`:time;
}

calculateNewYear()
setInterval(calculateNewYear, 1000)