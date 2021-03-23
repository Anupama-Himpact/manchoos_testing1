const { browser, ExpectedConditions } = require("protractor");
module.exports = function () {
    'use strict'
    //covid policy validation
    var objRepo = require('../resources/objectRepository.json');
    var inputBoxActions = new commons.inputBoxActions();
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var menuitems = objLocator.findLocator(objRepo.menu.menuitems)
    //add menu
    var addMenu = objLocator.findLocator(objRepo.menu.addMenu)
    var selectBiryani = objLocator.findLocator(objRepo.menu.selectBiryani)
    var selectFood1 = objLocator.findLocator(objRepo.menu.selectFood1)
    var selectWine = objLocator.findLocator(objRepo.menu.selectWine)
    var saveMenu = objLocator.findLocator(objRepo.menu.saveMenu)
    var update = objLocator.findLocator(objRepo.menu.update)

    var selectFood = objLocator.findLocator(objRepo.menu.selectFood)
    var addCusigne = objLocator.findLocator(objRepo.menu.addCusigne)
    var selectIndian = objLocator.findLocator(objRepo.menu.selectIndian)
    var addFoodType = objLocator.findLocator(objRepo.menu.addFoodType)
    var selectPureVeg = objLocator.findLocator(objRepo.menu.selectPureVeg)
    var notInList = objLocator.findLocator(objRepo.menu.notInList)
    var itemName = objLocator.findLocator(objRepo.menu.itemName)
    var discription = objLocator.findLocator(objRepo.menu.discription)
    var uniqueCode = objLocator.findLocator(objRepo.menu.uniqueCode)
    var price = objLocator.findLocator(objRepo.menu.price)
    var Discount = objLocator.findLocator(objRepo.menu.Discount)
    var NonVegradioButton = objLocator.findLocator(objRepo.menu.NonVegradioButton)
    var selectRecomdation = objLocator.findLocator(objRepo.menu.selectRecomdation)
    var save = objLocator.findLocator(objRepo.menu.save)

//foodtype

var selectAllCusine=objLocator.findLocator(objRepo.menu.selectAllCusine)

    //edit customet list
    var clickCheckBox = objLocator.findLocator(objRepo.menu.clickCheckBox)
    var edit = objLocator.findLocator(objRepo.menu.edit)
    var delete1 = objLocator.findLocator(objRepo.menu.delete1)
    var addProfilePic = objLocator.findLocator(objRepo.menu.addProfilePic)
    var saveChnages= objLocator.findLocator(objRepo.menu.saveChnages)
    //modifiers
    var clickModifiers=objLocator.findLocator(objRepo.menu.clickModifiers)
    var selectRegular=objLocator.findLocator(objRepo.menu.selectRegular)
    var clickEditModifiers=objLocator.findLocator(objRepo.menu.clickEditModifiers)
    var modifierSave=objLocator.findLocator(objRepo.menu.modifierSave)

//add ones
var addAdones=objLocator.findLocator(objRepo.menu.addAdones)
var selectAddones=objLocator.findLocator(objRepo.menu.selectAddones)
var editAddones=objLocator.findLocator(objRepo.menu.editAddones)


    this.clickMenuitems = function () {
        buttonActions.click(menuitems)
        return this;
    }
    //addmenu
    this.clickAddMenu = function () {
        buttonActions.click(addMenu)
        return this;
    }

    this.clickSelectBiryani = function () {
        buttonActions.click(selectBiryani)
        return this;
    }
    this.clickSelectFood = function () {
        buttonActions.click(selectFood1)
        return this;
    }
    this.clickSaveMenu = function () {
        buttonActions.click(saveMenu)
        return this;
    }
    this.clickSelectWine = function () {
        buttonActions.click(selectWine)
        return this;
    }
    this.clickUpdate = function () {
        buttonActions.click(update)
        return this;
    }



    this.clickSelectfood = function () {
        buttonActions.click(selectFood)
        return this;
    }
    this.clickAddCusine = function () {
        buttonActions.click(addCusigne)
        return this;
    }
    this.clickSelectIndian = function () {
        buttonActions.click(selectIndian)
        return this;
    }
    this.clickAddfoodType = function () {
        buttonActions.click(addFoodType)
        return this;
    }
    this.clickSelectPureVeg = function () {
        buttonActions.click(selectPureVeg)
        return this;
    }
    this.clickNotInList = function () {
        buttonActions.click(notInList)
        return this;
    }
    this.enterItemName = function (value) {
        inputBoxActions.type(itemName, value);
        return this;
    };
    this.enterDiscription = function (value) {
        inputBoxActions.type(discription, value);
        return this;
    };
    this.enterUniqueCode = function (value) {
        inputBoxActions.type(uniqueCode, value);
        return this;
    };
    this.enterPrice = function (value) {
        inputBoxActions.type(price, value);
        return this;
    };
    this.enterDiscount = function (value) {
        inputBoxActions.type(Discount, value);
        return this;
    };
    this.clickNonvegRadioButton = function () {
        buttonActions.click(NonVegradioButton)
        return this;
    }
    this.clickRecomdation = function () {
        buttonActions.click(selectRecomdation)
        return this;
    }
    this.clickSaveButton = function () {
        buttonActions.click(save)
        return this;
    }
    this.clickCheckBox = function () {
        buttonActions.click(clickCheckBox)
        return this;
    }
    this.clickEdit = function () {
        buttonActions.click(edit)
        return this;
    }
    this.clickDelete = function () {
        buttonActions.click(delete1)
        return this;
    }
    this.uploadProfileImage= function (value) {
        inputBoxActions.fileUpload(addProfilePic, value);
        return this;
    }
    this.clickSaveChanges = function () {
        buttonActions.click(saveChnages)
        return this;
    }
    this.clickModifiers = function () {
        buttonActions.click(clickModifiers)
        return this;
    }
    this.clickSelectregular= function () {
        buttonActions.click(selectRegular)
        return this;
    }
    this.clickEditModifiers= function () {
        buttonActions.click(clickEditModifiers)
        return this;
    }
    this.clickModifiersSave= function () {
        buttonActions.click(modifierSave)
        return this;
    }
    this.clickAddAdones= function () {
        buttonActions.click(addAdones)
        return this;
    }
    this.clickSelectAddones= function () {
        buttonActions.click(selectAddones)
        return this;
    }

    this.clickEditAddones= function () {
        buttonActions.click(editAddones)
        return this;
    }
  

    //select WestIndia
    this.clickSelectAll= function () {
        buttonActions.click(selectAllCusine)
        return this;
    }
    
    


    this.addmenuitems = function (itemName, discription,addProfilePic,uniqueCode, price, Discount) {
      
        this.clickMenuitems()
        waitActions.wait()
        this.clickAddMenu()
        waitActions.wait()
         this.clickSelectBiryani()
         waitActions.waitForElementIsDisplayed()
         this.clickSelectFood ()
         waitActions.waitForElementIsDisplayed()
         this.clickSelectWine()
         waitActions.wait()
         this.clickSaveMenu()
         waitActions.waitForElementIsDisplayed()
         //edit menu
         this.clickAddMenu()
        waitActions.wait()
        this.clickSelectWine()
         waitActions.wait()
         this.clickUpdate()


        //this.clickSelectfood()
        // waitActions.waitForElementIsDisplayed()
        // 
        // this.clickSelectIndian()
        // waitActions.waitForElementIsDisplayed()
        // 
        // this.clickSelectPureVeg()
        // waitActions.waitForElementIsDisplayed()
        // this.clickNotInList()
        // waitActions.wait()
        // this.enterItemName(itemName)
        // waitActions.waitForElementIsDisplayed()
        // this.enterDiscription(discription)
        // waitActions.waitForElementIsDisplayed()
        // this.uploadProfileImage(addProfilePic)
        // waitActions.wait()
        // this.clickSaveChanges()
        // waitActions.waitForElementIsDisplayed()
        // this.enterUniqueCode(uniqueCode)
        // waitActions.waitForElementIsDisplayed()
        // this.enterPrice(price)
        // waitActions.wait()
        // this.enterDiscount(Discount)
        // waitActions.waitForElementIsDisplayed()
        // this.clickNonvegRadioButton()
        // waitActions.wait()
        // this.clickRecomdation()
        // waitActions.waitForElementIsDisplayed()
        // this.clickSaveButton()
        // waitActions.waitForElementIsDisplayed()

    }
    this.AddcusineTYpe = function (){
        waitActions.wait()
        this.clickSelectfood()
        waitActions.wait()

        this.clickAddCusine()
        waitActions.wait()
      

    }
    this.addFoodType=function(){
        this.clickMenuitems()
        waitActions.wait()
        this.clickSelectfood()
        waitActions.wait()
        this.clickSelectIndian()
     waitActions.waitForElementIsDisplayed()
     
     this.clickAddfoodType()
        waitActions.wait()

        this.clickSelectAll()
        waitActions.wait()

        this.clickSaveMenu()
        waitActions.wait()
        this.clickAddfoodType()
        waitActions.wait()
    }

    this.editNotInList = function (itemName, discription, uniqueCode, price, Discount) {
        this.clickSelectPureVeg()
        waitActions.waitForElementIsDisplayed()
        this.clickCheckBox()
        waitActions.waitForElementIsDisplayed()
        this.clickEdit()
        waitActions.waitForElementIsDisplayed()
        this.enterItemName(itemName)
        waitActions.waitForElementIsDisplayed()
        this.enterDiscription(discription)
        waitActions.waitForElementIsDisplayed()
        this.enterUniqueCode(uniqueCode)
        waitActions.waitForElementIsDisplayed()
        this.enterPrice(price)
        waitActions.waitForElementIsDisplayed()
        this.enterDiscount(Discount)
        waitActions.waitForElementIsDisplayed()

        //modifiers
        this.clickModifiers()
        waitActions.wait()
        this.clickSelectregular()
        waitActions.waitForElementIsDisplayed()
        this.clickModifiersSave()
        waitActions.wait()

        //edit modifiers
        this.clickEditModifiers()
        waitActions.waitForElementIsDisplayed()
        
        this.clickSelectregular()
        waitActions.waitForElementIsDisplayed()
        this.clickModifiersSave()
        waitActions.wait()
      

        //addones
        this.clickAddAdones()
        waitActions.wait()
        this.clickSelectAddones()
        waitActions.wait()
        this.clickModifiersSave()
        waitActions.wait()
        this.clickEditAddones()
        waitActions.wait()
        this.clickSelectAddones()
        waitActions.wait()
        this.clickModifiersSave()
        waitActions.wait()
        this.clickSaveButton()
        waitActions.wait()


    }
    this.deleteNotinList = function () {
        this.clickSelectPureVeg()
        waitActions.waitForElementIsDisplayed()
        this.clickCheckBox()
        waitActions.waitForElementIsDisplayed()
        this.clickDelete()
        waitActions.waitForElementIsDisplayed()
    }


}