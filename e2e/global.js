(function () {
    'use strict';

    // Helper functions
    global.wait = {
        until: {
            present: function (elementFinder, optionalTimeout) {
                browser.driver.wait(function () {
                    return elementFinder.isPresent().then(function (present) {
                        return present;
                    });
                }, optionalTimeout || 60000);
            }
        }
    };

    global.commons = {};
    global.commons.inputBoxActions = require('./commons/inputBoxActions.js');
    global.commons.buttonActions = require('./commons/buttonActions.js');
    global.commons.dropDownActions = require('./commons/dropDownActions.js');
    global.commons.mouseActions = require('./commons/mouseActions.js');
    global.commons.waitActions = require('./commons/waitActions.js');
    global.commons.verifyActions = require('./commons/verifyActions.js');
        

    global.utils = {};
    global.utils.objectLocator = require('./utils/objectLocator.js');
    
    global.pages = {};
    global.pages.loginPage = require('./pages/loginPage');
    global.pages.dashBoardPage = require('./pages/dashBoardPage');
    global.pages.leftNavigationPage = require('./pages/leftNavigationPage');
    global.pages.covidpolicypage= require('./pages/covidpolicypage.js');
    global.pages.AdminDetailsPage= require('./pages/AdminDetailsPage.js');
    global.pages.emailConfigarationPage= require('./pages/emailConfigarationPage.js');
    global.pages.featuresPage= require('./pages/featuresPage.js');
    global.pages.bankingPage= require('./pages/bankingPage.js');    
    global.pages.gallarypage= require('./pages/gallarypage.js');
    global.pages.catagoriesPage=require('./pages/catagoriesPage.js');
    global.pages.menuPage=require('./pages/menuPage.js');
}());
