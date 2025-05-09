/**
 * Rolso
 * Modern cargo, transport and logistics HTML Template. Exclusively built for transport, logistics, delivery, moving, and cargo websites.
 * Exclusively on https://1.envato.market/rolso-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lilith Lamber (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
"use strict";

import {initSwiperSlider} from "./modules/slider";
import {initGallery} from "./modules/gallery";

document.addEventListener('DOMContentLoaded', () => {
    initSwiperSlider('.projects_slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: true,
        speed: 1200,
        breakpoints: {
            575.98: {
                slidesPerView: "auto",
            },
            1199.98: {
                slidesPerView: "auto",
                spaceBetween: 120,
            },
        }
    })

    initSwiperSlider('.slider_media', {
        slidesPerView: 1,
        autoplay: true,
        speed: 1500,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    })

    // adds zooming transition to the slides
    document.querySelectorAll('.slider_media-slide img').forEach(img => {
        let transformOrigin = img.dataset.transformOrigin;
        if (transformOrigin) {
            img.style.transformOrigin = transformOrigin;
        }
    })

    initSwiperSlider('.testimonials_slider', {
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 1500,
    })

    initSwiperSlider('.partners_slider', {
        pagination: false,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        speed: 1500,
        breakpoints: {
            575.98: {
                slidesPerView: 2,
            },
            767.98: {
                slidesPerView: 3,
            },
            991.98: {
                slidesPerView: 4,
            }
        }
    })

    initGallery('.about_gallery');
})