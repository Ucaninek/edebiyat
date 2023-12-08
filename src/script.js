import barba from '@barba/core';
import anime from 'animejs';
import { enter, leave } from './modules/cover-util.js';

import Home from './pages/Home.js';
import About from './pages/About.js';

import loader from './modules/loader.js';
loader();

const springConfig = "spring(2, 100, 25, 0)";
const cover = document.getElementById('cover');

barba.init({
    views: [Home, About],
    transitions: [
        {
            name: 'cover',
            leave({ current }) {
                const tl = anime.timeline({
                    easing: springConfig
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
                    easing: springConfig
                });

                leave();

                tl.add(
                    {
                        targets: next.container,
                        opacity: [0, 1]
                    },
                    0
                );

                return tl.finished;
            }
        }
    ],
    preventRunning: true
});

barba.hooks.beforeLeave((data) => {
    var namespace = $(data.trigger).text();
    if (namespace.startsWith('~')) namespace = 'Home';
    $('#cover-text').text(namespace.charAt(0).toUpperCase() + namespace.slice(1));
});

barba.hooks.beforeEnter(() => {
    twemoji.parse(document.body);
});
