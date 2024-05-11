let counter = document.querySelectorAll('.count__header');
let counterSpan = document.querySelectorAll(".count__header--mod");
let counterSpanArr = [...counterSpan];
let counterArr = [...counter];
counterArr.map((elm) => {
    let counterDigit = +elm.innerText.split('+')[1];
    let counterValue = 0;

    function counterUp() {
        elm.innerHTML = `<span class="count__header--mod">+</span>${counterValue++}`;
        if (counterValue > counterDigit) {
            clearInterval(countUp);
        }
    }
    let countUp = setInterval(() => {
        counterUp();
    }, 10)
})