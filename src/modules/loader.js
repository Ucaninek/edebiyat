import $ from 'jquery';
import { leave } from './cover-util.js';

export default function init() {
    $(window).on('load', () => {
        leave();
    });
}