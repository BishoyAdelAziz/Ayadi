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

import ProgressBar from 'progressbar.js/dist/progressbar';

function initProgressbar(container) {
    const progressBars = document.querySelectorAll('.progressDisplay');
    const rootEl = document.querySelector(container);

    if (rootEl) {
        progressBars.forEach(bar => {
            let id = bar.getAttribute('id');
            let value = bar.dataset.value;
            let color = bar.dataset.fill;
            let limit = value / 100;
            let type = bar.dataset.progress;
            let elem;

            const commonOptions = {
                strokeWidth: 6,
                trailWidth: 6,
                from: {color: '#E1E1E1'},
                to: {color: color},
                text: {
                    value: '0',
                    className: 'progress-text h5',
                    style: {
                        position: 'absolute',
                        padding: 0,
                        margin: 0,
                        color: "#19456B",
                    },
                },
                step: (state, shape) => {
                    shape.path.setAttribute("stroke", state.color);
                    shape.setText(`${value}%`);
                }
            }

            switch (type) {
                case "circle": {
                    init("circle");
                    break;
                }
                case "line": {
                    init("line");
                    break;
                }
            }

            function init(progressType) {
                if (progressType === "circle") {
                    elem = new ProgressBar.Circle(`#${id}`, {
                        ...commonOptions,
                    })
                } else if (progressType === "line") {
                    elem = new ProgressBar.Line(`#${id}`, {
                        ...commonOptions,
                    });
                }
            }

            const observer = new IntersectionObserver(handleIntersection);
            observer.observe(bar);

            function handleIntersection(entries, observer) {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        elem.animate(limit, {
                            duration: 700
                        });
                    }
                });
            }
        })
    }
}

export default initProgressbar;