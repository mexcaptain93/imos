$(document).ready(function () {
    slider();
});

function slider() {
    var slider = $('.js-slider'),
        total = slider.find('> *').length;

    slider.slick({
        'autoplay': 'false',
        'dots': 'true'
    });

    if (total < 10) {
        total = '0' + total;
    }
    $('.js-slider-total').text(total);


    slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);
        if (currentSlide++ < 9) {
            currentSlide = '0' + currentSlide;
        }
        $('.js-slider-current').text(currentSlide);
    });

    $('.js-slider-prev').on('click', function (e) {
        e.preventDefault();
        $('.js-slider').find('.slick-prev').click();
    });
    $('.js-slider-next').on('click', function (e) {
        e.preventDefault();
        $('.js-slider').find('.slick-next').click();
    });
}