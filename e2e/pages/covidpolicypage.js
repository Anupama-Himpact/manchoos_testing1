module.exports = function () {
    'use strict'
    //covid policy validation
    var objRepo = require('../resources/objectRepository.json');
 
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions=new commons.waitActions();
 
    //calling the locaters using the ObjectRepositry.
    var covidPolicy = objLocator.findLocator(objRepo.covidPolicys.covidPolicy)
    var selectPolicy = objLocator.findLocator(objRepo.covidPolicys.selectPolicy)
    var selectPolicy2 = objLocator.findLocator(objRepo.covidPolicys.selectPolicy2)
    var savebutton = objLocator.findLocator(objRepo.covidPolicys.savebutton)
    var unselectPolicy = objLocator.findLocator(objRepo.covidPolicys.unselectPolicy)


    this.covidpolicypage = function(path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }
    this.navigateTocovidPolicy= function () {
        buttonActions.click(covidPolicy)
        return this;
    }
    this.clickSelectPolicy = function () {
        buttonActions.click(selectPolicy)
        return this;
    }
    this.clickSelectPolicy2 = function () {
        buttonActions.click(selectPolicy2)
        return this;
    }
    this.clickSavebutton = function () {
        buttonActions.click(savebutton)
        return this;
    }
    this.clickUnselectPolicy = function () {
        buttonActions.click(unselectPolicy)
        return this;
    }
    this.clickSavebutton = function () {
        buttonActions.click(savebutton)
        return this;
    }
    this.covidAction=function(){
        this.navigateTocovidPolicy()
        waitActions.waitForElementIsDisplayed()
        this.clickSelectPolicy()
        waitActions.waitForElementIsDisplayed()
        this.clickSavebutton()
        waitActions.waitForElementIsDisplayed()
        this.clickUnselectPolicy()
        waitActions.waitForElementIsDisplayed()
        this.clickSavebutton()
        waitActions.waitForElementIsDisplayed()
    }
}

