$(document).ready(function () {
    const flowersSlider = new Swiper(".flowers-slider", {
        // параметры слайдера
        loop: true,
        slidesPerView: 6,

        // подключаем стрелки
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // настройка адаптива
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            // when window width is >= 530px
            530: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 4,
                spaceBetween: 5,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 6,
                spaceBetween: 5,
            },
        },
    });

    const reviewsSlider = new Swiper(".reviews-slider", {
        // параметры слайдера
        loop: true,
        slidesPerView: 1,

        // подключаем стрелки
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
