const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');
const closeLinks = document.getElementsByClassName('.close');


menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('change');
});

closeLinks.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuIcon.classList.remove('change');
});



document.querySelector('.latestImg-previous').addEventListener('click', () => {
    var moveBack = document.querySelector('.latestImgLine');
    moveBack.classList.add('moveBackTrigger');
});

var FAQs = document.querySelector('.FAQsMove');


FAQs.addEventListener('click', () => {
    const FAQsContent = document.querySelector('.FAQsCont');
    if (FAQs.classList.contains('FAQsButtonActive')){
        FAQs.classList.remove('FAQsButtonActive');
        FAQs.innerHTML = '+';
        FAQs.parentElement.parentElement.style.height = '5rem';
    }
    else{
        FAQs.classList.add('FAQsButtonActive');
        FAQs.innerHTML = '-';
        FAQsContent.classList.add('.FAQsDis');
        FAQs.parentElement.parentElement.style.height = '13rem';
    }
})

