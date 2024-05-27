const images = [...document.querySelectorAll('.popupimgref')];
const popup = document.querySelector('.popup');
const closebtn = document.querySelector('.closeBtn');
const popupImg = document.querySelector('.popupimg');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.PrevBtn');
let imagesURL = ['images/category-5%201.png', 'images/category-2%201.png', 'images/category-4%201.png', 'images/category-1%201.png', 'images/category-3%201.png']

images.forEach((elm) => {
    elm.addEventListener('click', (eventElm) => {
        let url = eventElm.target.src.split("/").splice('7').join('/')
        releventImg(url)
        popup.classList.add('active');
    })

})

closebtn.addEventListener('click', () => {
    popup.classList.remove('active');
})

nextBtn.addEventListener('click', (e) => {
    nexT(e);
})

prevBtn.addEventListener('click', (e) => {
    preV(e)
})

function nexT(e) {
    prevBtn.style.display = 'block';
    let respondImg = e.target.parentElement.parentElement.children[0].children[0].src.split('/').splice(7).join('/');
    let lenth = imagesURL.length;
    if (respondImg === imagesURL[lenth - 2]) {
        nextBtn.style.display = 'none';
    }
    for (let i = 0; i < lenth - 1; i++) {
        if (imagesURL[i] === respondImg) {
            popupImg.src = imagesURL[++i];
        }
    }
}

function preV(e) {
    nextBtn.style.display = 'block';
    let respondImg = e.target.parentElement.parentElement.children[0].children[0].src.split('/').splice(7).join('/');
    let lenth = imagesURL.length;
    if (respondImg === imagesURL[1]) {
        prevBtn.style.display = 'none';
    }
    for (let i = lenth - 1; i > 0; i--) {
        if (imagesURL[i] === respondImg) {
            popupImg.src = imagesURL[i - 1];
        }
    }
}

function releventImg(url) {
    popupImg.src = url;
    if (url === imagesURL[imagesURL.length - 1]) {
        nextBtn.style.display = 'none';
    } else if (url === imagesURL[0]) {
        prevBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
    }
}