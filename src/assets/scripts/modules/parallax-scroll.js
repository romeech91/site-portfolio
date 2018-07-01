var parallax = (function () {
    var bg = document.querySelector('.hero__bg-img');
    var user = document.querySelector('.user');
    var bgTitle = document.querySelector('.section-title__pic');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + 'px';       
            var transformString = "translate3d(0, ' + strafe + ', 0)";
            var style = block.style;
            style.top = strafe;
            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        init: function (winScroll) {
            this.move(bg, winScroll, 3);/* 
            this.move(bgTitle, winScroll, 0.5);
            this.move(user, winScroll, 0.5); */
        }
    }
}());


window.onscroll = function () {
    var winScroll = window.pageYOffset;
    parallax.init(winScroll);
}