var config = require('../../nightwatch.conf.js');
var load_speed = 10000;

var demo = {
    testFunctionality: function () {
        return this

            .waitForElementVisible('body', load_speed, 'test if body loads')
           
    },
};

module.exports = {
    commands: [demo],
    url: function () {
        return this.api.launchUrl;
    },
    elements: { // in here you should add all selectors for each element
        searchInput: {
            selector: 'EXAMPLE'
        },
    }
};