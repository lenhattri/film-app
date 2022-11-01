var handlebars = require('handlebars');

function incIndexHandlebars() {
    handlebars.registerHelper("inc", function (value, options) {
        return parseInt(value) + 1;
    });
}


module.exports = incIndexHandlebars;