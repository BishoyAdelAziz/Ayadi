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

export function preventDefault() {
    const forms = document.querySelectorAll('form');
    const links = document.querySelectorAll('a[href="#"]');

    links.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
        })
    })

    forms.forEach(el => {
        el.addEventListener('submit', e => {
            e.preventDefault();
        })
    })
}

export function setCurrentYear() {
    const container = document.getElementById('currentYear');

    if (container) {
        container.textContent = String(new Date().getFullYear());
    }
}

export function addSelectIcon() {
    const selectOpeners = document.querySelectorAll('.custom-select-opener');
    selectOpeners.forEach(el => {
        let icon = document.createElement('i');
        icon.classList.add('icon', 'icon-caret-down-solid');
        el.append(icon)
    })
}

export function iOS() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    isIOS ? document.body.classList.add('iOS') : document.body.classList.remove('iOS')
}