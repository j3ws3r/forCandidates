var config = require('../../nightwatch.conf.js');
var testData = require("../testData/testData.js");


module.exports = {
  before: function (browser) {
    console.log('Setting up...');
  },
  after: function (browser) {
    console.log('Closing down...')
    browser.end()
  },

  '@tags': ['demo'],
  'Testing if launching works': function (browser) {
    var demo = browser.page.demoObject();

    demo.navigate()
    demo.testFunctionality()

    browser.perform(function() { console.log('If this test passes it means that setup works!')})
  }
};