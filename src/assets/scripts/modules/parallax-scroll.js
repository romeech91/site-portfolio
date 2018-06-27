var parallax = (function () {
    var bg = document.querySelector('.hero__bg-img');
    var user = document.querySelector('.user');
    var bgTitle = document.querySelector('.section-title__pic');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';

            var style = block.style;

            style.top = strafe;
        },
        init: function (winScroll) {
            this.move(bg, winScroll, 25);
        }
    }
}());

window.onscroll = function() {
    var winScroll = window.pageYOffset;
    parallax.init(winScroll);
    console.log(winScroll);
}