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
    })

})

closebtn.addEventListener('click', () => {
    popup.classList.remove('active');
})

nextBtn.addEventListener('click', (e) => {
    let respondImg = e.target.parentElement.parentElement.children[0].children[0].src.split('/').splice(7).join('/');
    let lenth = imagesURL.length;
    for (let i = 0; i < lenth; i++) {
        if (imagesURL[i] === respondImg) {
            if (i < lenth - 1) {
                popupImg.src = imagesURL[i + 1]
            }

        }
    }
})
prevBtn.addEventListener('click', (e) => {
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