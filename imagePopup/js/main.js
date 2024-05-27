const images = [...document.querySelectorAll('.popupimgref')];
const popup = document.querySelector('.popup');
const closebtn = document.querySelector('.closeBtn');
const popupImg = document.querySelector('.popupimg');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.PrevBtn');
let imagesURL = ['images/category-5%201.png', 'images/category-2%201.png', 'images/category-4%201.png', 'images/category-1%201.png', 'images/category-3%201.png']

images.forEach((elm) => {
    elm.addEventListener('click', (eventElm) => {
        releventImg(eventElm.target.src)
        popup.classList.add('active');
        nextBtn.style.display = 'block';
    })

})

closebtn.addEventListener('click', () => {
    popup.classList.remove('active');
})

nextBtn.addEventListener('click', (e) => {
    nexT(e);
})

function nexT(e) {
    prevBtn.style.display = 'block';
    let respondImg = e.target.parentElement.parentElement.children[0].children[0].src.split('/').splice(7).join('/');
    let lenth = imagesURL.length;
    if (respondImg === imagesURL[lenth - 1]) {
        nextBtn.style.display = 'none';
    }
    for (let i = 0; i < lenth - 1; i++) {
        if (imagesURL[i] === respondImg) {
            popupImg.src = imagesURL[++i]
        }
    }
}
prevBtn.addEventListener('click', (e) => {
    nextBtn.style.display = 'block';
    let respondImg = e.target.parentElement.parentElement.children[0].children[0].src.split('/').splice(7).join('/');
    let lenth = imagesURL.length;
    for (let i = 0; i < lenth; i++) {
        if (imagesURL[i] === respondImg) {
            if (i > 0) {
                popupImg.src = imagesURL[i - 1]
            }
        }
    }
})

function releventImg(eventElem) {
    let imgURL = eventElem.split("/").splice('7').join('/');
    popupImg.src = imgURL;
}