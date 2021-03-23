module.exports = function () {
    'use strict'
    //covid policy validation
    var objRepo = require('../resources/objectRepository.json');
    var inputBoxActions = new commons.inputBoxActions();
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions=new commons.waitActions();
   
 
    //calling the locaters using the ObjectRepositry.
    var Admindetail = objLocator.findLocator(objRepo.Admindashbord.Admindetail)
    var phoneNumber=objLocator.findLocator(objRepo.Admindashbord.phoneNumber)
    var secondaryPhoneNumber=objLocator.findLocator(objRepo.Admindashbord.secondaryPhoneNumber)
    var secPhonenumber=objLocator.findLocator(objRepo.Admindashbord.secPhonenumber)
    var removeSecPhonenumber=objLocator.findLocator(objRepo.Admindashbord.removeSecPhonenumber)
    var emailId=objLocator.findLocator(objRepo.Admindashbord.emailId)
    var secoundaryEmailid=objLocator.findLocator(objRepo.Admindashbord.secoundaryEmailid) 
    var emailid2=objLocator.findLocator(objRepo.Admindashbord.emailid2)
    var removeEmailid=objLocator.findLocator(objRepo.Admindashbord.removeEmailid)
    var gstNumber=objLocator.findLocator(objRepo.Admindashbord.gstNumber)
    var vatNumber=objLocator.findLocator(objRepo.Admindashbord.vatNumber)
    var PanNumber=objLocator.findLocator(objRepo.Admindashbord.PanNumber)
    var fssiNumber=objLocator.findLocator(objRepo.Admindashbord.fssiNumber)

    
    var gstCertificate=objLocator.findLocator(objRepo.Admindashbord.gstCertificate)
    var savebutton=objLocator.findLocator(objRepo.Admindashbord.savebutton)
 

    this.AdminDetailsPage = function(path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }
    this.navigateToAdmindetail= function () {
        buttonActions.click(Admindetail)
        return this;
    }
    this.enterPhoneNumber= function (value) {
        inputBoxActions.type(phoneNumber, value);
        return this;
    };
    this.clicksecondaryPhoneNumber = function () {
        buttonActions.click(secondaryPhoneNumber)
        return this;
    }
    this.enterSecPhonenumber= function (value) {
        inputBoxActions.type(secPhonenumber,value);
        return this;
    };
    this.clickRemoveSecPhonenumber = function () {
        buttonActions.click(removeSecPhonenumber)
        return this;
    }
    this.enterEmailId= function (value) {
        inputBoxActions.type(emailId, value);
        return this;
    };
    this.clicksecoundaryEmailid = function () {
        buttonActions.click(secoundaryEmailid)
        return this;
    }
    this.enterEmailId2= function (value) {
        inputBoxActions.type(emailid2, value);
        return this;
    };
    this.clickRemoveEmailid = function () {
        buttonActions.click(removeEmailid)
        return this;
    }
    this.enterGstNumber= function (value) {
        inputBoxActions.type(gstNumber, value);
        return this;
    };
    
    this.entervatNumber= function (value) {
        inputBoxActions.type(vatNumber, value);
        return this;
    };
    this.enterPanNumber= function (value) {
        inputBoxActions.type(PanNumber, value);
        return this;
    };

    this.enterFssiNumber= function (value) {
        inputBoxActions.type(fssiNumber, value);
        return this;
    };
    this.clickGstCertificate= function () {
        buttonActions.click(gstCertificate)
        return this;
    }
    this.clicksavebutton= function () {
        buttonActions.click(savebutton)
        return this;
    }
    this.uploadGstCertificate= function (value) {
        inputBoxActions.fileUpload(gstCertificate,value)
        return this;
    }
    this.admin=function(phoneNumber,secPhonenumber,emailId,emailid2,gstNumber,vatNumber,PanNumber,fssiNumber,gstCertificate){

        this.navigateToAdmindetail()
        waitActions.waitForElementIsDisplayed()
        this.enterPhoneNumber(phoneNumber)
        // waitActions.waitForElementIsDisplayed()
        // this.clicksecondaryPhoneNumber()
        // waitActions.waitForElementIsDisplayed()
        // this.enterSecPhonenumber(secPhonenumber)
        // waitActions.waitForElementIsDisplayed()
        // this.clickRemoveSecPhonenumber()
        // waitActions.waitForElementIsDisplayed()
        // this.enterEmailId(emailId)
        // waitActions.waitForElementIsDisplayed()
        // this.clicksecoundaryEmailid()
        // waitActions.waitForElementIsDisplayed()
        // this.enterEmailId2(emailid2)
        // waitActions.waitForElementIsDisplayed()
        // this.clickRemoveEmailid()
        waitActions.waitForElementIsDisplayed()
        this.enterGstNumber(gstNumber)
        waitActions.wait()
         waitActions.wait()
         this.uploadGstCertificate(gstCertificate)
         waitActions.wait()
         this.entervatNumber(vatNumber)
         waitActions.waitForElementIsDisplayed()
         this.enterPanNumber(PanNumber)
         waitActions.waitForElementIsDisplayed()
         this.enterFssiNumber(fssiNumber)
         this.clicksavebutton()
         waitActions.wait()
         
        }
}

