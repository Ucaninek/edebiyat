import $ from 'jquery';
import { getAll } from 'tdk-icerik';

class Home {
    namespace = 'home';
    beforeEnter = async _data => {
        $('#a-home').attr('href', '#');
        $('#a-eserler').attr('href', './eserler');
        const data = await getAll();
        $('#text-proverb').text(data.proverb.content);
        $('#text-proverb-meaning').text(data.proverb.meaning);

        $('#text-confusedWord-improper').text(data.confusedWord.improperSpelling);
        $('#text-confusedWord-proper').text(data.confusedWord.properSpelling);

        $('#text-randomWord-word').text(data.randomWord.content);
        $('#text-randomWord-meaning').text(data.randomWord.meaning);

        $('#text-randomRule-rule').text(data.randomRule.rule);
        $('#text-randomRule-rule').attr('href', data.randomRule.url);

        $('#text-foreignWord-word').text(data.foreignWord.foreignWord);
        $('#text-foreignWord-meaning').text(data.foreignWord.meaning);
        $('#text-foreignWord-suggestion').text(data.foreignWord.translation);
        $('#text-foreignWord-orign').text(data.foreignWord.orign);
    };
}

export default new Home();