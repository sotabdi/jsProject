const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".whackHead__Count");
const moles = document.querySelectorAll(".mole");
const startBtn = document.querySelector('.startBtn');
const restartBtn = document.querySelector('.restartBtn');
const timer = document.querySelector('.timer');
const highestScore = document.querySelector('.highestScore');
let lastHole;
let timeUp = 10;
let score = 0;
let prevScore = [];

// task1: need a random time everyrime
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
    /*receive min value and max value
       and return a random number between those number*/
}

//task2: need a single an unique hole div every time
function getRandaomHoles() {
    let randomIndex = Math.floor(Math.random() * holes.length);
    let hole = holes[randomIndex];
    if (hole === lastHole) {
        return getRandaomHoles(); //suffle again if we get same div again
    }
    lastHole = hole; //update last random hole div
    return hole; // return a random hole div evrytime I call this func

}

//task3: after receive random time and random hole div every time and add a new class to the div
function show() {
    let ranTime = randomTime(100, 1000); // recive random time between 100ms to 1000ms
    let hole = getRandaomHoles(); //receive a random div
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up') //remove up class form the div after some time depends on rantime 
        if (timeUp > 0) {
            show(); // call show untill timeup gets 0, then 
        }
    }, ranTime)
}

//task4: click to strat the game and reset all values
function start() {
    scoreBoard.innerHTML = 0;
    timeUp = 10;
    score = 0;
    startBtn.style.display = 'none';
    timer.style.display = 'block';
    show();
    let stop = setInterval(() => { //every 1000ms js invoke this func for me
        timeUp--; //we want to run this game for only 10 sec so by invoking this function it decrement the value so we can apply a condition 
        timer.innerHTML = `Timer: ${timeUp}`;
        if (timeUp === 0) {
            prevScore.push(score); // for storing the score in an array
            prevScore.sort((a, b) => { return a - b; }) //sort array number in ascending order
            highestScore.innerHTML = `Highest Score: ${prevScore[prevScore.length-1]}`; //get last and biggest elemnt of the array
            highestScore.style.display = 'block'
            restartBtn.style.display = 'block';
            clearInterval(stop); // once timer value reach 0  clear the interval func
        }
    }, 1000);
}

//task5: count click and update value 
function clickCount(event) { //we recive all event values as an argument if we call this func in the eventlistenerfunc
    if (!event.isTrusted) return; // learn new thing, there is istrusted method which return boolean if events are fake or not
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

// task6: click to play again
function restart() {
    scoreBoard.innerHTML = 0;
    timeUp = 10;
    score = 0;
    startBtn.style.display = 'block';
    timer.style.display = 'none';
    restartBtn.style.display = 'none';
}

moles.forEach((mole) => {
    mole.addEventListener('click', clickCount)
})

startBtn.addEventListener('click', start)
restartBtn.addEventListener('click', restart);