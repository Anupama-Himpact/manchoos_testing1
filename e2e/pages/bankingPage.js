module.exports = function () {
    'use strict'
    //covid policy validation
    var objRepo = require('../resources/objectRepository.json');
    var inputBoxActions = new commons.inputBoxActions();
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();


    //calling the locaters using the ObjectRepositry. 
    var bankDetails = objLocator.findLocator(objRepo.ourBankingpartner.bankDetails)
    var accountNumber = objLocator.findLocator(objRepo.ourBankingpartner.accountNumber)
    var conformAccountNumber=objLocator.findLocator(objRepo.ourBankingpartner.conformAccountNumber)
    var ifscNumber=objLocator.findLocator(objRepo.ourBankingpartner.ifscNumber)
    var verify=objLocator.findLocator(objRepo.ourBankingpartner.verify)
    var accountName=objLocator.findLocator(objRepo.ourBankingpartner.accountName)
    var saveButton=objLocator.findLocator(objRepo.ourBankingpartner.saveButton)
    var removeBankdetails=objLocator.findLocator(objRepo.ourBankingpartner.removeBankdetails)
    
    //update
    
    //calling the Actionfunction
    this.bankingPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }
    this.navigateToBankingDetails = function () {
        buttonActions.click(bankDetails)
        return this;
    }
    this.enterAccountNumber = function (value) {
        inputBoxActions.type(accountNumber, value);
        return this;
    };
    this.enterConformActNumber = function (value) {
        inputBoxActions.type(conformAccountNumber, value);
        return this;
    };
    this.enterIfscNumber = function (value) {
        inputBoxActions.type(ifscNumber, value);
        return this;
    };
    this.clickverify = function () {
        buttonActions.click(verify)
        return this;
    }
    this.enterAccountName = function (value) {
        inputBoxActions.type(accountName, value);
        return this;
    };
    this.clickSaveButton = function () {
        buttonActions.click(saveButton)
        return this;
    }
    this.clickRemoveBankdetails= function () {
        buttonActions.click(removeBankdetails)
        return this;
    }

//create 
    this.bank = function (accountNumber,conformAccountNumber,ifscNumber,accountName) {
        this.navigateToBankingDetails()
        waitActions.waitForElementIsDisplayed()
        this.enterAccountNumber(accountNumber)
        waitActions.waitForElementIsDisplayed()
        this.enterConformActNumber(conformAccountNumber)
        waitActions.waitForElementIsDisplayed()
        this.enterIfscNumber(ifscNumber)
        waitActions.waitForElementIsDisplayed()
        this.clickverify ()
        waitActions.waitForElementIsDisplayed()
        this.enterAccountName(accountName)
        waitActions.wait()
        this.clickSaveButton()
        waitActions.wait()     
        this.clickRemoveBankdetails()
        waitActions.wait()   
    }

    //other Banks

    var otherBanks=objLocator.findLocator(objRepo.ourBankingpartner.otherBanks)
    var canaraBank=objLocator.findLocator(objRepo.ourBankingpartner.canaraBank)
    var newAccountNumber=objLocator.findLocator(objRepo.ourBankingpartner.newAccountNumber)
    var newCofnActNumber=objLocator.findLocator(objRepo.ourBankingpartner.newCofnActNumber)
    var ifscCode=objLocator.findLocator(objRepo.ourBankingpartner.ifscCode)
    var newverify=objLocator.findLocator(objRepo.ourBankingpartner.newverify)
    var newAccName=objLocator.findLocator(objRepo.ourBankingpartner.newAccName)
    var otrSave=objLocator.findLocator(objRepo.ourBankingpartner.otrSave)
    var removeOtherBankDetails=objLocator.findLocator(objRepo.ourBankingpartner.removeOtherBankDetails)

    this.clickOtherBanks= function () {
        buttonActions.click(otherBanks)
        return this;
    }
    this.clickCanaraBank= function () {
        buttonActions.click(canaraBank)
        return this;
    }
    this.enterNewAccountNumber= function (value) {
        inputBoxActions.type(newAccountNumber, value);
        return this;
    };
    this.enterNewCofmActNumber= function (value) {
        inputBoxActions.type(newCofnActNumber, value);
        return this;
    };
    this.enterIfscCode= function (value) {
        inputBoxActions.type(ifscCode, value);
        return this;
    };
    this.clicknewverify= function () {
        buttonActions.click(newverify)
        return this;
    }
    this.enterNewAccName= function (value) {
        inputBoxActions.type(newAccName, value);
        return this;
    };
    this.clickOthrSaveButton= function () {
        buttonActions.click(otrSave)
        return this;
    }
    this.clickRemoveNewDetails= function () {
        buttonActions.click(removeOtherBankDetails)
        return this;
    }

    
    

    this.otherBanking=function(newAccountNumber,newCofnActNumber,ifscCode,newAccName){
        this.navigateToBankingDetails()
        waitActions.waitForElementIsDisplayed()

        this.clickOtherBanks()
        waitActions.waitForElementIsDisplayed()
        this.clickCanaraBank()
        waitActions.waitForElementIsDisplayed()
        this.enterNewAccountNumber(newAccountNumber)
        waitActions.waitForElementIsDisplayed()
        this.enterNewCofmActNumber(newCofnActNumber)
        this.enterIfscCode(ifscCode)
        this.clicknewverify()
        waitActions.waitForElementIsDisplayed()
        this.enterNewAccName(newAccName)
        waitActions.wait()
        this.clickOthrSaveButton()
        waitActions.wait()
        this.clickRemoveNewDetails()
        waitActions.wait()
    }
    

}