const bulb = document.querySelector('.bulboff');

bulb.addEventListener('click', (e) => {
    e.target.classList.toggle('bulbon');
})