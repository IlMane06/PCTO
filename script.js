window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.scroll-animations .animated');
    elements.forEach(function (element) {
        if (isScrolledIntoView(element)) {
            element.classList.add('fadeInLeft');
        }
    });
});

function isScrolledIntoView(element) {
    var rect = element.getBoundingClientRect();
    var elemTop = rect.top;

    var isVisible = (elemTop >= 0 && document.body.scrollTop >= 200);
    return isVisible;
}

document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
    var video = document.getElementById("video");

    container.addEventListener("mouseenter", function() {
        video.pause();
    });

    container.addEventListener("mouseleave", function() {
        video.play();
    });

});