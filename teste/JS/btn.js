const btn = document.getElementById('btnjs');
const text = document.querySelector('.text');
const textList = ['issooooooo ', 'Aquiloooo', 'aquiloooo outro', ' O mesmooo !!'];
let currentIndex = 0;


btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % textList.length;
    
    text.style.transform = 'translateX(100%)';
   
    setTimeout(() => {
        text.textContent = textList[currentIndex];
        text.style.transform = 'translateX(0)';
    }, 500);
});