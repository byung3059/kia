$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 4) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })


    const main_slide = new Swiper('.main_slide', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    })

    const content_slide = new Swiper('.content_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination-content',
            clickable: true,
        },


        navigation: {
            nextEl: '.content_next',
            prevEl: '.content_prev',
        },

    })

    const sub_content_slide = new Swiper('.sub_content_slide', {
        loop: true,
        navigation: {
            nextEl: '.sub_content_next',
            prevEl: '.sub_content_prev',
        },
    })


    $('.to_top button').on('click', function () {
        $('html, body').animate({ scrollTop: 0, }, 300)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })


})