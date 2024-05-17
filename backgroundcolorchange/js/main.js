const bgFull = document.querySelector('#fullWrapper');
const generateBtn = document.querySelector('.generate');
const colorCode = document.querySelector('.colorCodeF');
const copy = document.querySelector('.fa-copy');
const check = document.querySelector('.fa-check');

function generateColor() {
    let R = Math.round(Math.random() * 255);
    let G = Math.round(Math.random() * 255);
    let B = Math.round(Math.random() * 255);
    return `rgb(${R},${G},${B})`
}

generateBtn.addEventListener('click', () => {
    bgFull.style.background = generateColor();
    copy.style.display = 'block'
    check.style.display = 'none'
    colorCode.value = generateColor();
})

copy.addEventListener('click', () => {
    copy.style.display = 'none'
    check.style.display = 'block'
    navigator.clipboard.writeText(colorCode.value)
})