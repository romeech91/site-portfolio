const sidebar = document.querySelector('.sidebar-mobile');
const btn = document.querySelector('.circle-nav');
const heroSec = document.querySelector('.blog');
const links = document.querySelectorAll('.blog__link-mobile');

window.addEventListener('scroll', () => {
    const posTop = heroSec.getBoundingClientRect().top;
    const top = posTop.toFixed();
    if (top < 380) {
        btn.style.width = "50px";
    } if (top > 380 && sidebar.classList == "sidebar-mobile") {
        btn.style.width = '0px';
    }
});

btn.addEventListener('click', () => {
    btn.classList.toggle('circle-nav--active');
    sidebar.classList.toggle('sidebar-mobile--active');
})

links.forEach(link => {
    link.addEventListener('click', () => {
        btn.classList.remove("circle-nav--active");
        sidebar.classList.remove("sidebar-mobile--active");
    });
});