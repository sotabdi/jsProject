const images = [...document.querySelectorAll('.popupimgref')];
const popup = document.querySelector('.popup');
const closebtn = document.querySelector('.closeBtn');
const popupImg = document.querySelector('.popupimg');
const nextBtn = document.querySelector('.nextBtn');

images.forEach((elm) => {
    elm.addEventListener('click', (eventElm) => {
        releventImg(eventElm.target.src)
        popup.classList.add('active');
        nextBtn.addEventListener('click', (e) => {
            next(eventElm, )
        })
    })

})

closebtn.addEventListener('click', () => {
    popup.classList.remove('active');
})

function releventImg(eventElem) {
    let imgURL = eventElem.split("/").splice('7').join('/');
    popupImg.src = imgURL;
}

function next(e) {
    let url = e.target.src.split('/').splice('7').join('/');
    console.log(images);
}