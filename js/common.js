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

import AOS from 'aos';
import svg4everybody from "svg4everybody";
import LazyLoad from "vanilla-lazyload";
import {Collapse, Tab} from "bootstrap";
import customSelect from "custom-select/src";
import {drawNav} from "./modules/nav";
import {setCurrentYear, preventDefault, addSelectIcon, iOS} from "./modules/helpers";
import {makeElementSticky} from "./modules/nav";
import initMap from "./modules/map";
import {validate} from "./modules/forms";
import {initGallery} from "./modules/gallery";
import animateNumber from "./modules/counter";
import initProgressbar from "./modules/progress";

document.addEventListener('DOMContentLoaded', () => {
    iOS();
    preventDefault();
    drawNav();
    svg4everybody();
    const lazyload = new LazyLoad();
    AOS.init({
        offset: 30, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 650, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // animation repeat
    });
    animateNumber();
    setCurrentYear();
    customSelect('select');
    addSelectIcon();
    makeElementSticky();
    initMap();
    validate();
    initGallery();
    initProgressbar('.quality');

    window.addEventListener('resize', iOS);
})
