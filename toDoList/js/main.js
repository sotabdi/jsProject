const todoInput = document.querySelector('.todoBottominput__value');
const todoBtn = document.querySelector('.todoBottominput__btn');
const listItem = document.querySelector('.todoBottomList')
todoBtn.addEventListener('click', () => {
    if (todoInput.value === '') {
        alert('empty')
    } else {
        let li = document.createElement('li');
        li.innerHTML = todoInput.value;
        let closeBtn = document.createElement('span');
        closeBtn.innerHTML = 'x';
        li.appendChild(closeBtn);
        listItem.appendChild(li);

    }
    todoInput.value = '';
})
listItem.addEventListener('click', (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('liactive');
    } else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
    }
})