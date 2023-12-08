import $ from 'jquery';

class About {
    namespace = 'about';
    beforeEnter = async _data => {
        $('#a-home').attr('href', '../');
        $('#a-about').attr('href', './');
    };
}

export default new About();