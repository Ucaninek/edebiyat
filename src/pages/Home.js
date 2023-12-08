import $ from 'jquery';

class Home {
    namespace = 'home';
    beforeEnter = async _data => {
        $('#a-home').attr('href', './');
        $('#a-about').attr('href', './about');
    };
}

export default new Home();