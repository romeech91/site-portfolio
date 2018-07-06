const btn = document.querySelector('.auth__btn');
const frontSide = document.querySelector('.hero__bg-block');
const backSide = document.querySelector('.hero__bg-block_auth');
const goMain = document.querySelector('.link__button-back');

btn.addEventListener("click", () => {
    frontSide.style.transform = 'rotateY(180deg)';
    backSide.style.transform = 'rotateY(360deg)';
    btn.style.right = '-100%';
    btn.classList.remove('bounceInRight');
});

goMain.addEventListener('click', (e) => {
    e.preventDefault();
    frontSide.style.transform = 'rotateY(0deg)';
    backSide.style.transform = 'rotateY(180deg)';
    btn.style.right = '3%';
    btn.classList.toggle('bounceInRight');
});
