const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
const PKG = require('./package.json'); // so we can get the version of the project
const SCREENSHOT_PATH = "./node_modules/nightwatch/screenshots/" + PKG.version + "/";

const config = { // we use a nightwatch.conf.js file so we can include comments and helper functions
  "src_folders": [
    "test/e2e"     // we use '/test' as the name of our test directory by default. So 'test/e2e' for 'e2e'.
  ],
  "page_objects_path": [
    "test/pageObjects"
  ],
  "globals_path": "globals.js",
  "output_folder": "./reports", // reports (test outcome) output by Nightwatch
  "test_workers": { "enabled": false, "workers": "auto" }, // perform tests in parallel where possible

  "webdriver": {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515,
    "log_path": ""
  },

  "test_settings": {
    "default": {
      "launch_url": "https://www.google.com/",
      "persist_globals": true,
      "globals": {
        "waitForConditionTimeout": 15000,
        "retryAssertionTimeout": 5000
      },
      "screenshots": {
        "enabled": true,
        "path": SCREENSHOT_PATH,
        "on_failure": true,
        "on_error": true
      },

    },
    "chrome": {
      "silent": true,
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "acceptInsecureCerts": true,
        "chromeOptions": {
          "args": [
            /*'--start-fullscreen',**/ '--disable-dev-shm-usage', '--no-sandbox', 'ignore-certificate-errors'
          ]
        }
      }
    }
  }

}
module.exports = config;
