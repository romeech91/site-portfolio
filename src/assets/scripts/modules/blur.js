var blur = (function () {
    var wrapper = document.querySelector('.form'),
        form = document.querySelector('.form__blur');
    
    function getCoords(elem) {
        const box = elem.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset,
            left: box.left + window.pageXOffset
        };
    }
    return {
        set: function () {
            let top = getCoords(wrapper).top - getCoords(wrapper.parentNode).top;

            var imgWidth = document.querySelector('.about-me').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                blurCSS = form.style;
                
            //blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + -top + 'px';
        }
    }
}());

blur.set();

window.onresize = function () {
    blur.set();
}