module.exports = function () {
    'use strict'
    //covid policy validation
    var objRepo = require('../resources/objectRepository.json');
    var inputBoxActions = new commons.inputBoxActions();
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();


    //calling the locaters using the ObjectRepositry. 
    var emailConfigaration = objLocator.findLocator(objRepo.emailDashbord.emailConfigaration)
    var userName = objLocator.findLocator(objRepo.emailDashbord.userName)
    var password = objLocator.findLocator(objRepo.emailDashbord.password)
    var hostname = objLocator.findLocator(objRepo.emailDashbord.hostname)
    var port = objLocator.findLocator(objRepo.emailDashbord.port)
    var fromEmail = objLocator.findLocator(objRepo.emailDashbord.fromEmail)
    var save = objLocator.findLocator(objRepo.emailDashbord.save)

    //update
    var upateUsername=objLocator.findLocator(objRepo.emailDashbord.upateUsername)
    var updatepassword=objLocator.findLocator(objRepo.emailDashbord.updatepassword)
    var updateHost=objLocator.findLocator(objRepo.emailDashbord.updateHost)

    //calling the Actionfunction
    this.emailConfigarationPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }
    this.navigateToEmailConfigaration = function () {
        buttonActions.click(emailConfigaration)
        return this;
    }
    this.enterUsername = function (value) {
        inputBoxActions.type(userName, value);
        return this;
    };
    this.enterPassword = function (value) {
        inputBoxActions.type(password, value);
        return this;
    };
    this.enterHost = function (value) {
        inputBoxActions.type(hostname, value);
        return this;
    };
    this.enterPort = function (value) {
        inputBoxActions.type(port, value);
        return this;
    };
    this.enterFromEmail = function (value) {
        inputBoxActions.type(fromEmail, value);
        return this;
    };
    this.clickSavebutton = function () {
        buttonActions.click(save)
        return this;
    }

    //update functionality

    this.enterUpadteusername = function (value) {
        inputBoxActions.type(upateUsername, value);
        return this;
    };
    this.enterupdatepassword = function (value) {
        inputBoxActions.type(updatepassword, value);
        return this;
    };
    this.enterUpdateHost = function (value) {
        inputBoxActions.type(updateHost, value);
        return this;
    };

//create 
    this.email = function (userName, password, hostname, port, fromEmail, save) {
        this.navigateToEmailConfigaration()
        waitActions.waitForElementIsDisplayed()
        this.enterUsername(userName)
        waitActions.wait()
        this.enterPassword(password)
        waitActions.wait()
        this.enterHost(hostname)
        waitActions.wait()
        this.enterPort(port)
        waitActions.wait()
        this.enterFromEmail(fromEmail)
        waitActions.wait()
        this.clickSavebutton(save)
        waitActions.wait()
    }

    //update
    this.emailConfig = function (upateUsername,updatepassword,updateHost){
        this.enterUpadteusername(upateUsername)
        waitActions.wait()
        this.enterupdatepassword(updatepassword)
        waitActions.wait()
        this.enterUpdateHost(updateHost)
        waitActions.wait()
        this.clickSavebutton(save)
        waitActions.wait()

    }

}