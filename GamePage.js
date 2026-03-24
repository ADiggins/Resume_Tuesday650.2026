// console.log("game page javascript connected")

var activeSlide = 0
var slides = document.getElementsByClassName("slide");
showSlide(activeSlide);

function showSlide(newIndex) {
    slides[activeSlide].style.display = "none";
    activeSlide = (newIndex + slides.length) % slides.length;
    slides[activeSlide].style.display = "block";
}

function showSlideWithAnimation(newIndex) {
    animateSlideOut( slides[activeSlide] );
    activeSlide = (newIndex + slides.length) % slides.length;
    animateSlideIn( slides[activeSlide] );
}

function changeSlide(by) {
    showSlideWithAnimation(activeSlide + by);
}

function animateSlideIn(slide) {
    slide.style.display = "block"
    slide.animate(
        [
            { transform: 'translateX(-500px)' },
            { transform: 'translateX(0px)' },
        ],
        {
            duration: 400
        }
    )
}
function animateSlideOut(slide) {
    var thisAni = slide.animate(
        [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(500px)' },
        ],
        {
            duration: 400
        }
    )
    thisAni.finished.then ( function() {
        slide.style.display = "none"
    })
}
