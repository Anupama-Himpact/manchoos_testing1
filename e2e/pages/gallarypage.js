module.exports = function () {
    'use strict'
    //covid policy validation
    var objRepo = require('../resources/objectRepository.json');
    var inputBoxActions = new commons.inputBoxActions();
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();


    //Ambiance img add and remove and rename
    var addImage = objLocator.findLocator(objRepo.gallary.addImage)
    var PathGallary = objLocator.findLocator(objRepo.gallary.PathGallary)
    var saveChanges = objLocator.findLocator(objRepo.gallary.saveChanges)
    var reName = objLocator.findLocator(objRepo.gallary.reName)
    var inputValue = objLocator.findLocator(objRepo.gallary.inputValue)
    var save = objLocator.findLocator(objRepo.gallary.save)
    var remove = objLocator.findLocator(objRepo.gallary.remove)
    var okButton = objLocator.findLocator(objRepo.gallary.okButton)
   


    this.gallaryPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }
    this.navigateToPathGallary = function () {
        buttonActions.click(PathGallary)
        return this;
    }
    this.uploadAddImage = function (value) {
        inputBoxActions.fileUpload(addImage, value);
        return this;
    }
    this.clickSaveChanges = function () {
        buttonActions.click(saveChanges)
        return this;
    }
    this.clickReName = function () {
        buttonActions.click(reName)
        return this;
    }
    this.EnterRenameName = function (value) {
        inputBoxActions.type(inputValue, value);
        return this;
    }
    this.clickSave = function () {
        buttonActions.click(save)
        return this;
    }
    this.clickRemove = function () {
        buttonActions.click(remove)
        return this;
    }
    this.clicOkButton = function () {
        buttonActions.click(okButton)
        return this;
    }

    this.clickgallary = function (addImage, inputValue) {
        this.navigateToPathGallary()
        waitActions.waitForElementIsDisplayed()
        this.uploadAddImage(addImage)
        waitActions.waitForElementIsDisplayed()
        this.clickSaveChanges()
        waitActions.waitForElementIsDisplayed()
        this.clickReName()
        waitActions.wait()
        this.EnterRenameName(inputValue);
        waitActions.wait()
        this.clickSave()
        waitActions.wait()
        this.clickRemove()
        waitActions.wait()
        this.clicOkButton()
        waitActions.wait()   
    }
     
    //Food img add and remove and Rename.
    var foodNvg = objLocator.findLocator(objRepo.gallary.foodNvg)
     var foodimage = objLocator.findLocator(objRepo.gallary.foodimage)
     var foodSaveChanges = objLocator.findLocator(objRepo.gallary.foodSaveChanges)
     var renameFood = objLocator.findLocator(objRepo.gallary.renameFood)
     var RenameInputvalue= objLocator.findLocator(objRepo.gallary.RenameInputvalue)
    var foodSave= objLocator.findLocator(objRepo.gallary.foodSave)
    var imgRemove= objLocator.findLocator(objRepo.gallary.imgRemove)
     var removeOk= objLocator.findLocator(objRepo.gallary.removeOk)
   

     this.clickFoodNvg = function () {
        buttonActions.click(foodNvg)
        return this;
    }

    this.uploadAddFoodimage = function (value) {
        inputBoxActions.fileUpload(foodimage, value);
        return this;
    }

    this.clickFodSaveChanges = function () {
        buttonActions.click(foodSaveChanges)
        return this;
    }
    this.clickRenameFood = function () {
        buttonActions.click(renameFood)
        return this;
    }
    this.EnterRenameInputValue = function (value) {
        inputBoxActions.type(RenameInputvalue, value);
        return this;
    }
    this.clicksaveButton = function () {
        buttonActions.click(foodSave)
        return this;
    }
    
    this.clickRemoveButton = function () {
        buttonActions.click(imgRemove)
        return this;
    }
    this.clickRemoveOK = function () {
        buttonActions.click(removeOk)
        return this;
    }

    this.clickFood = function (foodimage,RenameInputvalue) {
        waitActions.wait()
        this.navigateToPathGallary()
        this.clickFoodNvg()
        waitActions.waitForElementIsDisplayed()

        this.uploadAddFoodimage(foodimage)
        waitActions.waitForElementIsDisplayed()

        this.clickFodSaveChanges()
        waitActions.wait()

        this.clickRenameFood()
        waitActions.wait()

        this.EnterRenameInputValue(RenameInputvalue)
        waitActions.wait()
        this.clicksaveButton()
        waitActions.wait()

        this.clickRemoveButton()
        waitActions.wait()
        this.clickRemoveOK ()
        waitActions.wait()

    }


}

