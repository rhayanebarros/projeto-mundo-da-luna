$('.owl-carousel').owlCarousel({
    nav: true,
    dots: false,
    loop: false,
    rewind: true,
    stagePadding: 0,
    margin: 5,
    checkVisibility: true,
    navElement: 'div',
    responsive: {
        0 : {
            items: 1,
            slideBy: 1
        },
          768 : {
            items: 1,
            slideBy: 1
        },
    }
});