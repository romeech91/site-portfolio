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

//skills mover

var svgScroll = (function () {
    var svg = document.getElementById('skill__figure'),
        svgPath = document.querySelectorAll('.skill__circle'),
        windowMarging = window.innerHeight / 3,
        svgRect = svg.getBoundingClientRect(),
        svgPos = svgRect.top;
    
    return {
        grow: function (winScroll) {
            var startAnimate = wScroll - svgPos + windowMarging,
                pixelsElapsed = svgPos - winScroll,
                percentsElapsed = 100 - Math.ceil(pixelsElapsed / windowMarging * 100),
                percentsDraw = 1200 / 100 * percentsElapsed;
            
            if (startAnimate >= 0) {
                var drawAmount = 1200 - percentsDraw;
                
                if (drawAmount > 0) {
                    svgPath.forEach(function (item) {
                        item.style.strokeDashoffset = drawAmount;
                    });
                }
            }
        }
    }
}());



window.onscroll = function () {
    var winScroll = window.pageYOffset;

    parallax.init(winScroll);
    svgScroll.grow(winScroll);
}