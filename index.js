const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: 'http://www.estacionbustalaveradelareina.com/Busqueda.php',
    encoding: 'latin1',
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(($) => {
        const elements = $('#jumpMenu').children('option').toArray();
        console.log(elements.map((el) => el.children[0].data + ': ' + el.attribs.value));
    })
    .catch((err) => {
        console.log(err);
    });