const images = [...document.querySelectorAll('.popupimgref')];
const popup = document.querySelector('.popup');
const closebtn = document.querySelector('.closeBtn');
const popupImg = document.querySelector('.popupimg');

images.forEach((elm) => {
    elm.addEventListener('click', (eventElm) => {
        releventImg(eventElm.target.src)
        popup.classList.add('active');
    })
})

closebtn.addEventListener('click', () => {
    popup.classList.remove('active');
})

function releventImg(eventElem) {
    let imgURL = eventElem.split("/").splice('7').join('/');
    popupImg.src = imgURL;
}