import $ from 'jquery';
import atasozu from '../modules/randomAtasozu.js';
import deyim from '../modules/randomDeyim.js';

class Home {
    namespace = 'home';
    beforeEnter = async _data => {
        $('#a-home').attr('href', '#');
        $('#a-about').attr('href', './about');
        $('#text-atasozu').text(atasozu());
        $('#text-deyim').text(deyim());
    };
}

export default new Home();