$(function () {
    $('.showcase_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // prevArrow: <button type="button" class="slick-prev"></button>,

    });

    $('.faq_item-title').on('click', function (event) {
        $(this).parent().toggleClass('active');
    });
});

let smoothScroll = new scrollToSmooth('a', {
    // options here
});
smoothScroll.init();
