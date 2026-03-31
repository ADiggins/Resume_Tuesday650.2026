// console.log("game page javascript connected")

var activeSlide = 0
var slides = document.getElementsByClassName("slide");
showSlide(activeSlide);

function showSlide(newIndex) {
    slides[activeSlide].style.display = "none";
    activeSlide = (newIndex + slides.length) % slides.length;
    slides[activeSlide].style.display = "block";
}

function showSlideWithAnimation(newIndex, direction) {
    animateSlideOut( slides[activeSlide], direction);
    activeSlide = (newIndex + slides.length) % slides.length;
    animateSlideIn( slides[activeSlide], direction );
}

function changeSlide(by) {
    showSlideWithAnimation(activeSlide + by, by>0 ? 'left':'right' );
}

function animateSlideIn(slide, direction) {
    slide.style.display = "block"
    slide.animate(
        [
            { transform: `translateX( ${ direction == 'right' ? '-500px':'500px' } )` },
            { transform: 'translateX(0px)' },
        ],
        {
            duration: 400
        }
    )
}
function animateSlideOut(slide, direction) {
    var thisAni = slide.animate(
        [
            { transform: 'translateX(0px)' },
            { transform: `translateX(${ direction == 'right' ? '500px' : '-500px' } )` },
        ],
        {
            duration: 400
        }
    )
    thisAni.finished.then ( function() {
        slide.style.display = "none"
    })
}
