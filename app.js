const chooseBtn = document.getElementsByClassName("chooseColorBtn");
console.log(chooseBtn)
const contentItem = document.querySelectorAll('.content-item');


chooseBtn.forEach(item => {
    item.addEventListener('click',changeImg)
})

function changeImg (event) {
    const target = event.currentTarget;
    console.log(target);
    chooseBtn.forEach(function (item) {
        item.classList.remove('choose__color-btn--active');
    })

    target.classList.add('choose__color-btn--active');
}