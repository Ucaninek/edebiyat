import $ from 'jquery';

class Eserler {
    namespace = 'eserler';
    beforeEnter = async _data => {
        $('#a-home').attr('href', '../');
        $('#a-eserler').attr('href', '#');
    };
}

export default new Eserler();