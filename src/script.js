import barba from '@barba/core';
import anime from 'animejs';
import { enter, leave } from './modules/cover-util.js';

import Home from './pages/Home.js';
import About from './pages/About.js';

import loader from './modules/loader.js';
//import Alpine from 'alpinejs'

loader();

import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll();

//window.Alpine = Alpine;
//Alpine.start();

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

const easingConfig = "easeOutExpo";

barba.init({
    views: [Home, About],
    transitions: [
        {
            name: 'cover',
            leave({ current }) {
                const tl = anime.timeline({
                    easing: easingConfig,
                    duration: 1000,
                    delay: 500
                });

                enter();

                tl.add(
                    {
                        targets: current.container,
                        opacity: 0
                    },
                    0
                );

                return tl.finished;
            },
            enter({ next }) {
                const tl = anime.timeline({
                    easing: easingConfig,
                    duration: 100
                });

                tl.add(
                    {
                        targets: next.container,
                        opacity: 1
                    },
                    0
                );

                leave();
                return tl.finished;
            }
        }
    ],
    preventRunning: true,
});

barba.hooks.beforeLeave((data) => {
    var namespace = $(data.trigger).text();
    alert(namespace);
    $('#cover-text').text('allah');
});