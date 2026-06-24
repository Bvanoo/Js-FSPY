const btnStart = document.getElementById('st');
const timer = document.getElementById('timer');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('rst');

let i = 0;
let sec = 0;
let min = 0;
let hour = 0;
let chronoIntervalId = null;

// function addSec(){
//     console.log(i);
//     return i++;
// }

// setInterval(addSec, 1000)


// function alertAfter5Sec(){
//     alert("5 Secondes écoulée");
// }

// setTimeout(alertAfter5Sec, 5000);

function chrono(){
    sec++;
    if(sec>59){
        sec = 0;
        min++;
    }else if(min>59){
        min = 0;
        hour++;
    }
    timer.innerText = `${hour}:${min}:${sec}`
}

function start(){
    if(chronoIntervalId === null){
        chronoIntervalId=setInterval(chrono,1000)
    }
}
function stop(){
    if(chronoIntervalId !== null){
        clearInterval(chronoIntervalId)
        chronoIntervalId= null;
    }
    
}
function reset(){
        clearInterval(chronoIntervalId)
        chronoIntervalId= null;
        sec = 0;
        min = 0;
        hour = 0;
        timer.innerText='0:0:0'
}
btnStart.onclick=(()=>{
    start();
})
btnStop.onclick=(()=>{
    stop();
})
btnReset.onclick=(() =>{
    reset();
})
