const subBtn = document.querySelector('.subBtn');
const guessBtn = document.querySelector('.guessBtn');
const subInpt = document.querySelector('.subInput');
const guessInpt = document.querySelector('.guessInput');
const subOption = document.querySelector('.guessInner');
const guessOption = document.querySelector('.guessInner2');
const attepMsg = document.querySelector('.atteptMsg');
const guessattepMsg = document.querySelector('.guessatteptMsg');
const prvGuess = document.querySelector('.prevGuess');
const remain = document.querySelector('.guerssRemain')
const tryAgain = document.querySelector('.tryAgain');
const restart = document.querySelector('.restart');

let prevGuess = [];
let attempt = 1;

subBtn.addEventListener('click', () => {
    subInputCheak();
    guessBtn.addEventListener('click', () => {
        guessInputCheak();
    })
})

function subInputCheak() {
    if (isNaN(subInpt.value)) {
        attepMsg.innerText = 'Please enter a valid number';
        subInpt.value = '';
    } else if (subInpt.value < 1) {
        attepMsg.innerText = 'Please enter a number greater than 1!';
        subInpt.value = '';
    } else if (subInpt.value > 10) {
        attepMsg.innerText = 'Please enter a number less than 10!';
        subInpt.value = '';
    } else {
        subOption.style.display = 'none';
        guessOption.style.display = 'flex';
    }

}

function guessInputCheak() {
    let guessval = guessInpt.value;
    if (isNaN(guessInpt.value)) {
        guessattepMsg.innerText = 'Please enter a valid number';
        guessInpt.value = '';
    } else if (guessInpt.value < 1) {
        guessattepMsg.innerText = 'Please enter a number greater than 1!';
        guessInpt.value = '';
    } else if (guessInpt.value > 10) {
        guessattepMsg.innerText = 'Please enter a number less than 10!';
        guessInpt.value = '';
    } else {
        prevGuess.push(guessInpt.value);
        if (attempt === 11) {
            displayGuess();
            guessattepMsg.innerText = 'Game Over';
            restart.style.display = 'block';
            guessBtn.style.display = 'none'
        } else {
            displayGuess();
            checkGuess(guessval)
        }
    }
}

function displayGuess() {
    guessInpt.value = '';
    prvGuess.innerHTML = `Preveious Guess: ${prevGuess.at(-1)}`
    attempt++
    console.log(attempt);
    remain.innerHTML = `Guess Remaining: ${11-attempt}`;
    console.log(prevGuess);
}

function checkGuess(guessval) {
    if (guessval === subInpt.value) {
        guessattepMsg.innerText = `You guessed correctly!`;
        restart.style.display = 'block';
        guessBtn.style.display = 'none'
    } else if (guessval < subInpt.value) {
        guessattepMsg.innerText = `Too High! Try again!`;
    } else if (guessval > subInpt.value) {
        guessattepMsg.innerText = `Too low! Try again!`;
    }
}

restart.addEventListener('click', () => {
    location.reload();
})