/* Loader */
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);
});


/* Sale Box */
const saleBox = document.querySelector('.first-section__deal-sale-list');
const contents = document.querySelectorAll('.first-section__deal-sale-list .first-section__deal-sale-item');

const btnPre = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let counter = 0;
const size = contents[0].clientWidth;


// 
let isDown = false;
let X;
saleBox.addEventListener('mousedown', (e) => {
    isDown = true;
    X = e.pageX;
});

saleBox.addEventListener('mouseleave', () => {
    isDown = false;

});

saleBox.addEventListener('mouseup', () => {
    isDown = false;
    console.log('Up')
});


saleBox.addEventListener('mousemove', (e) => {
    if (isDown == false) return;
    if (X > e.pageX) {
        btnNext.click();
    } else {
        btnPre.click();
    }
});




// 
btnNext.addEventListener('click', () => {
    if (counter >= contents.length - 1) return;
    saleBox.style.transition = "transform 0.4s ease-in-out";
    counter++;
    saleBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

btnPre.addEventListener('click', () => {
    if (counter <= 0) return;
    saleBox.style.transition = "transform 0.4s ease-in-out";
    counter--;
    saleBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// saleBox.addEventListener('transitionend', () => {
//     if (contents[counter].id === 'lastClone') {
//         saleBox.style.transition = "none";
//         counter = contents.length - 2;
//         saleBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if (contents[counter].id === 'firstClone') {
//         saleBox.style.transition = "none";
//         counter = contents.length - counter;
//         saleBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });