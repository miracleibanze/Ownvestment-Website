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

