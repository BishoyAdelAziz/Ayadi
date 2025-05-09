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

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Controller,
} from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Controller]);

// basic swiper initialization
export function initSwiperSlider(container, options) {
  const containerEL = document.querySelector(container);
  if (containerEL) {
    const swiper = new Swiper(container, {
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      loop: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      ...options,
    });
  }
}
