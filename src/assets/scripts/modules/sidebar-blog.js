const sidebar = document.querySelector('.sidebar-mobile');
const btn = document.querySelector('.circle-nav');
const heroSec = document.querySelector('.blog');

window.addEventListener('scroll', function() {
    const posTop = heroSec.getBoundingClientRect().top;
    const top = posTop.toFixed();
    console.log(top);
    if (top < 380) {
        btn.style.width = "50px";
    } if (top > 380) {
        btn.style.width = '0px';
    }
})

btn.addEventListener('click', function (e) {
    btn.classList.toggle('circle-nav--active');
    sidebar.classList.toggle('sidebar-mobile--active');
})
