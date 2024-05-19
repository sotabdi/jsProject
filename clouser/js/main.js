const counter = document.querySelector('.count');
const incBtn = document.querySelector('.incBtn');
const decBtn = document.querySelector('.decBtn');
const resetBtn = document.querySelector('.resetBtn');

function increment() {
    let count = 0;
    return [function inc() {
            count += 1
            return count;
        },
        function dec() {
            count -= 1;
            return count;
        },
        function res() {
            count = 0
            return count;
        }
    ]
}

let callArr = increment();

incBtn.addEventListener('click', () => {
    counter.innerHTML = callArr[0]();
})

decBtn.addEventListener('click', () => {
    counter.innerHTML = callArr[1]();
})

resetBtn.addEventListener('click', () => {
    counter.innerHTML = callArr[2]();
})