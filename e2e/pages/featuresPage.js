const {browser,ExpectedConditions} = require("protractor");
module.exports = function () {
    'use strict'
    //covid policy validation
    var objRepo = require('../resources/objectRepository.json');
    var inputBoxActions = new commons.inputBoxActions();
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    
    //add catagory
    var featureNavigation = objLocator.findLocator(objRepo.feature.featureNavigation)
    var catagory = objLocator.findLocator(objRepo.feature.catagory)
    var governament = objLocator.findLocator(objRepo.feature.governament)
    var familyRestorant = objLocator.findLocator(objRepo.feature.familyRestorant)
    var save = objLocator.findLocator(objRepo.feature.save)
    var updateCatagory= objLocator.findLocator(objRepo.feature.updateCatagory)

    
    this.featuresPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }
    this.navigateToFeatureNavigation = function () {
        buttonActions.click(featureNavigation)
        return this;
    }
    this.clickCatagory = function () {
        buttonActions.click(catagory)
        return this;
    }
    this.clickGovernament = function () {
        buttonActions.click(governament)
        return this;
    }
    this.clickFamilyRestorant = function () {
        buttonActions.click(familyRestorant)
        return this;
    }
    this.clickSave = function () {
        buttonActions.click(save)
        return this;
    }
    this.clickupdateCatagory=function(){
        buttonActions.click(updateCatagory)
    }


    this.feature=function(){
        this.navigateToFeatureNavigation()
        waitActions.waitForElementIsDisplayed()
        this.clickCatagory()
        waitActions.waitForElementIsDisplayed()
        this.clickGovernament() 
        waitActions.waitForElementIsDisplayed()
        this.clickFamilyRestorant()
        waitActions.wait()
        this.clickSave()
        browser.navigate().refresh()
        waitActions.wait()
       
        
    }

    this.updateCatagory=function(){
        this.clickupdateCatagory()
        waitActions.wait()
        this.clickGovernament()
        waitActions.wait()
        this.clickFamilyRestorant()
        waitActions.wait()
        this.clickSave()
        waitActions.wait()
    }

    //cusign add and update flow 

    var cusignes=objLocator.findLocator(objRepo.feature.cusignes)
    var southIndian=objLocator.findLocator(objRepo.feature.southIndian)
    var rajasthani=objLocator.findLocator(objRepo.feature.rajasthani)
    var parsi=objLocator.findLocator(objRepo.feature.parsi)
var saveCusign=objLocator.findLocator(objRepo.feature.saveCusign)
var updateCusign=objLocator.findLocator(objRepo.feature.updateCusign)

    this.clickCusigne=function(){
        buttonActions.click(cusignes)
        return this;
    }
    this.clickSouthIndian=function(){
        buttonActions.click(southIndian)
        return this;
    }
    this.clickRajastani=function(){
        buttonActions.click(rajasthani)
        return this;

    }
    this.clickParsi=function(){

        buttonActions.click(parsi)
        return this;
    }
    this.clickSavecusign=function(){
        buttonActions.click(saveCusign)
        return this;
    }
    this.clickUpdateCusign=function(){
        buttonActions.click(updateCusign)
        return this;
    }

    this.cuisiansSave=function(){
        this.navigateToFeatureNavigation()
        waitActions.waitForElementIsDisplayed()
        this.clickCusigne()
        waitActions.wait()
        this.clickSouthIndian()
        waitActions.wait()
        this.clickRajastani()
        waitActions.wait()
        this.clickParsi()
        waitActions.wait()
        this.clickSavecusign()
        browser.navigate().refresh()
        waitActions.wait()
    }
    this.CuisinesUpdate=function(){
        this.clickUpdateCusign()
        waitActions.wait()
        this.clickSouthIndian()
        waitActions.wait()
        this.clickRajastani()
        waitActions.wait()
        this.clickParsi()
        waitActions.wait()
        this.clickSavecusign()
        waitActions.wait()

    }

    ///Aminites add and update flow

    var Amenites=objLocator.findLocator(objRepo.feature.Amenites)
    var freeWifi=objLocator.findLocator(objRepo.feature.freeWifi)
    var workFriendly=objLocator.findLocator(objRepo.feature.workFriendly)
    var outdoarSeating=objLocator.findLocator(objRepo.feature.outdoarSeating)
    var deloveryOnly=objLocator.findLocator(objRepo.feature.deloveryOnly)
    var saveAmenites=objLocator.findLocator(objRepo.feature.saveAmenites)
    var updateAmenies=objLocator.findLocator(objRepo.feature.updateAmenies) 

   

        this.clickAminites=function(){
            buttonActions.click(Amenites)
            return this;
        }
        this.clickFeeWifi=function(){
            buttonActions.click(freeWifi)
            return this;
        }
        this.clickWorkfriendly=function(){
            buttonActions.click(workFriendly)
            return this;
        }
        this.clickOutStanding=function(){
            buttonActions.click(outdoarSeating)
            return this;
        }
        this.clickDeliveryOnly=function(){
            buttonActions.click(deloveryOnly)
            return this;
        }
        this.clickSaveAminites=function(){
            buttonActions.click(saveAmenites)
            return this;
        }
        this.clickUpdateAminites=function(){
            buttonActions.click(updateAmenies)
            return this;
        }
    

    this.SaveAminites=function(){
        this.navigateToFeatureNavigation()
        waitActions.wait()
        this.clickAminites()
        waitActions.wait()

        this.clickFeeWifi()
        waitActions.waitForElementIsDisplayed()

        this.clickWorkfriendly()
        waitActions.wait()

        this.clickOutStanding()
        waitActions.waitForElementIsDisplayed()

        this.clickDeliveryOnly()
        waitActions.waitForElementIsDisplayed()

       this.clickSaveAminites()
       browser.navigate().refresh()
       waitActions.wait()
    }
    this.updateAminites=function(){

        this.clickUpdateAminites()
        waitActions.wait()
        this.clickFeeWifi()
        waitActions.wait()

        this.clickWorkfriendly()
        waitActions.wait()

        this.clickOutStanding()
        waitActions.wait()
        this.clickDeliveryOnly()
        waitActions.wait()

       this.clickSaveAminites()
       browser.navigate().refresh()
       waitActions.wait()


    }
}
