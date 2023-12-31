import anime from 'animejs';
import $ from 'jquery';

$('html').addClass('noscroll');
$('body').addClass('noscroll');

export function enter() {
    anime({
        targets: ['.fake-stack'],
        translateY: ['100%', 0],
        easing: 'easeOutExpo',
        duration: 1000
    });
    anime({
        targets: ['.layered-stack'],
        translateY: ['100%', 0],
        delay: anime.stagger(150, { start: 250 }),
        easing: 'easeOutExpo',
        duration: 1000
    });
    anime({
        targets: ['#cover-text'],
        opacity: 1,
        easing: 'easeOutExpo',
        delay: 150,
        duration: 300
    });
    $('html').addClass('noscroll');
    $('body').addClass('noscroll');
}

export function leave() {
    setTimeout(() => {
        anime({
            targets: ['.layered-stack'],
            translateY: [0, '100%'],
            delay: anime.stagger(50, { from: 'last' }),
            easing: 'easeOutExpo',
            duration: 1000
        });
        anime({
            targets: ['.fake-stack'],
            translateY: [0, '100%'],
            easing: 'easeOutExpo',
            delay: 250,
            duration: 1000,
            complete: () => {
                $('html').removeClass('noscroll');
                $('body').removeClass('noscroll');
            }
        });
        anime({
            targets: ['#cover-text'],
            opacity: 0,
            easing: 'easeOutExpo',
            delay: 150,
            duration: 300
        });
    }, 50);
}