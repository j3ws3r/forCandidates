# Nightwatch_fresh_project 

Nightwatch_fresh_project is a fresh project repo, which you can use to start your project with MP default nightwatch configuration

## Installation

Use any of your selected command processor (shell, bash, zsh, etc.) to clone this existing repo to your project folder 

```
git clone https://github.com/j3ws3r/forCandidates.git
```

## Usage

After cloning you should install all required dependencies with node packet manager (NPM):
```
npm install nightwatch
npm install selenium-server
npm install chromedriver 
npm install geckodriver
```
To check version of dependency for example:
```
chromedriver --version
```
If you get outdated stable version of any dependency please upgrade your npm with command: 
```
npm install -g npm
```
After that please remove node_modules directory and redownload dependencies: 
```
rm -rf node_modules
npm install nightwatch
npm install selenium-server
npm install chromedriver 
npm install geckodriver
```

## Initialize

To initialize npm project write ```npm init``` in terminal when you are in project folder. Input all required data. If successful, you will get newly created **package.json** . If your "Scripts": "test" is 'mocha', please change it to 'nightwatch' .

**To run tests use command** - ```nightwatch -e '$environment' -t '~/path/to/src_folder/e2e'```
## Configuration explanations

This repo uses conf.js instead of .json configuration file and has default values already prepared for most of the cases using chrome and firefox browsers. 


```src_folders``` - Folder where all the test cases are located <dd></dd>
```page_objects_path``` - Folder where all the page objects are located <dd></dd>
```globals_path``` - Location and name of global variable file. It should ALWAYS be kept in the root folder of project file<dd></dd> 
```output_folder``` - Reports file location which is generated after cases ran<dd></dd>
```test_workers``` - Ability to run tests in parallel. It works correctly only in local machine or remote server if it has 
multiple cores to run tests. On CI it does not work correctly or crashes and produces error. Recommendation to leave it as it is **"enabled": false**<dd></dd>
```webdriver``` - Web automation framework to run automation tests. Also it can have multiple paramaters setted<dd></dd>
```start_process``` - Automatically start **webdriver** when launch command is executed. Leave it always **True**<dd></dd>
```server_path``` - Path to servers. In this conf.js it is path to chromedriver. Also you can give path to selenium-server<dd></dd>
```port``` - Port which is used for particular server. In this case chromedriver uses 9515, gecko uses 4444<dd></dd>
```test_settings``` - Global settings of whole test file, including url's, timeouts, screenshots, browsers<dd></dd>
```default``` - Default settings of tests. When it starts it uses these values what you set here <dd></dd>
```launch_url``` - Specify address to your target website which you test. It can be domain name or server address<dd></dd>
```persist_globals``` - By default it is false'*false*'. That means, that if you set dynamic global variable it will exist until test suite where you setted it finishes. When *true* is set, variables can be used accross all test suites.<dd></dd>
```globals``` - In globals you can have multiple parameters set for timeouts and retries, etc<dd></dd>
```waitForConditionTimeout``` - Setted in globals. It waits till timeout of any command. If command is still false after time setted, it will stop tests<dd></dd>
```retryAssertionTimeout``` - Retries assert after certain time which user sets. Best used with waitForConditionTimeout<dd></dd>
```screenshots``` - Screenshots browser window. It accepts multiple parameters<dd></dd>
```enabled``` - Screenshot parameter. If set to *true*, it will do screenshots.<dd></dd>
```path``` - Screenshot parameter. You can specify your own path to screenshot directory<dd></dd>
```on_failure``` - Screenshot parameter. If set to *true* it will do screenshots on failure<dd></dd>
```on_error``` - Screenshot parameter. If set to *true* it will do screenshots on error<dd></dd>
```chrome``` - Browser specified. It accepts configuration parameters<dd></dd>
```silent``` - browser parameter. if set to *true* it will show all header and request info in log of tests. Best used for debugging only<dd></dd>
```desiredCapabilities``` - browser parameter. It can have it's own values set<dd></dd>
```browserName``` - desired capabilities parameter. You can make your own browser name how to call to it<dd></dd>
```javascriptEnabled``` - desired capabilities parameter. If set to *true* JS is enabled in browser<dd></dd>
```acceptSslCerts``` - desired capabilities parameter. If set to *true* browser accepts all SSL/TSL certificates<dd></dd>
```args``` - chromeOptions parameter. It can have arguments like **--headless**, **--no-sandbox**, **--disable-gpu**<dd></dd>
```--headless``` - browser is started in headless mode. User still can do screenshots, because selenium has lib to call graphical env even if browser is in headless mode.<dd></dd>



## Contributing
For major changes, please open an issue first to discuss what you would like to change. You can freely contribute by pushing minor changes to this project.

Please make sure to update tests as appropriate.
