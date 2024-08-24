import {Navigation} from 'swiper/modules'

export default {
    slider: "#testimonials-swiper" , 
    settings: {
        modules: [Navigation],
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        speed: 600,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            900: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
        },
    }
}
