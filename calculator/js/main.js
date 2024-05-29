const keys = document.querySelectorAll('.keys');
const display = document.querySelector('.display');

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        let clickedVal = e.target.textContent;
        display.value += clickedVal;
        if (clickedVal === 'AC') {
            display.value = '';
        } else if (clickedVal === '=') {
            let calc = display.value
            calc = calc.split('=').splice(0, 1).join('');
            display.value = eval(calc);
            // working on it
        }
    })
})