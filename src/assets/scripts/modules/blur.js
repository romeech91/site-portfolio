var blur = (function () {
    var wrapper = document.querySelector('.form'),
        form = document.querySelector('.form__blur');

    return {
        set: function () {
            var imgWidth = document.querySelector('.about-me').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                blurCSS = form.style;
                
            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }
    }
}());

blur.set();

window.onresize = function () {
    blur.set();
}