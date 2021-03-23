const { browser, ExpectedConditions } = require("protractor");
module.exports = function () {
    'use strict'
    //covid policy validation
    var objRepo = require('../resources/objectRepository.json');
    var inputBoxActions = new commons.inputBoxActions();
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var controlapanel = objLocator.findLocator(objRepo.menuCatagories.controlapanel)
    var menuType = objLocator.findLocator(objRepo.menuCatagories.menuType)
    var nonovegItems = objLocator.findLocator(objRepo.menuCatagories.nonovegItems)
    var biryani = objLocator.findLocator(objRepo.menuCatagories.biryani)
    var wine = objLocator.findLocator(objRepo.menuCatagories.wine)
    var selectAll = objLocator.findLocator(objRepo.menuCatagories.selectAll)
    var saveButton = objLocator.findLocator(objRepo.menuCatagories.saveButton)
    var editMenutype = objLocator.findLocator(objRepo.menuCatagories.editMenutype)
    var updateButton = objLocator.findLocator(objRepo.menuCatagories.updateButton)
    var nonVegUnselect = objLocator.findLocator(objRepo.menuCatagories.nonVegUnselect)
    var biryaniUnselect = objLocator.findLocator(objRepo.menuCatagories.biryaniUnselect)
    var food = objLocator.findLocator(objRepo.menuCatagories.food)



    this.catagoriespage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }
    this.clickControlPanel = function () {
        buttonActions.click(controlapanel)
        return this;
    }
    this.clickMenuType = function () {
        buttonActions.click(menuType)
        return this;
    }
    this.selectNonvegItems = function () {
        buttonActions.click(nonovegItems)
        return this;
    }
    this.selectBiriyani = function () {
        buttonActions.click(biryani)
        return this;
    }
    this.selectWine = function () {
        buttonActions.click(wine)
        return this;
    }
    this.clickSelectIcon = function () {
        buttonActions.click(selectIcon)
        return this;
    }


    this.clickSaveButon = function () {
        buttonActions.click(saveButton)
        return this;
    }
    this.clickeditMenuType = function () {
        buttonActions.click(editMenutype)
        return this;

    }
    this.clickNonvegUnselect = function () {
        buttonActions.click(nonVegUnselect)
        return this;

    }
    this.clickBiryaniUnselect = function () {
        buttonActions.click(biryaniUnselect)
        return this;

    }
    this.updateMenuType = function () {
        buttonActions.click(updateButton)
        return this;
    }
    this.clickSelectAll = function () {
        buttonActions.click(selectAll)
        return this;

    }
    this.clickfood = function () {
        buttonActions.click(food)
        return this;

    }


    //add meny type flow 
    this.menutypeAdd = function () {
        this.clickControlPanel()
        waitActions.waitForElementIsDisplayed()
        this.clickMenuType()
        waitActions.wait()
        this.selectNonvegItems()
        waitActions.wait()
        this.selectBiriyani()
        waitActions.wait()
        this.selectWine()
        waitActions.wait()
        this.clickSelectAll()
        waitActions.wait()
        this.clickSaveButon()
        
    }


    //update menu type
    this.menuTypeUpdate = function () {
        this.clickeditMenuType()
        waitActions.wait()
        this.clickNonvegUnselect()
        waitActions.wait()
        this.clickBiryaniUnselect()
        waitActions.wait()
        this.updateMenuType()
        browser.navigate().refresh()
        waitActions.wait()
    }

    var notInTheList = objLocator.findLocator(objRepo.menuCatagories.notInTheList)
    var enterName = objLocator.findLocator(objRepo.menuCatagories.enterName)
    var selectIcon = objLocator.findLocator(objRepo.menuCatagories.selectIcon)
    var addmenuType = objLocator.findLocator(objRepo.menuCatagories.addmenuType)
    var clickCheckbox = objLocator.findLocator(objRepo.menuCatagories.clickCheckbox)
    var editNotInList = objLocator.findLocator(objRepo.menuCatagories.editNotInList)
    var reEnterName = objLocator.findLocator(objRepo.menuCatagories.reEnterName)
    var SelectIcon1 = objLocator.findLocator(objRepo.menuCatagories.SelectIcon1)
    var updatMenuType = objLocator.findLocator(objRepo.menuCatagories.updatMenuType)
    var deleteMenuType = objLocator.findLocator(objRepo.menuCatagories.deleteMenuType)
    var deletepopupmenutype = objLocator.findLocator(objRepo.menuCatagories.deletepopupmenutype)


    this.clickNotInTheList = function () {
        buttonActions.click(notInTheList)
        return this;
    }
    this.enterCustomMenuType = function (value) {
        inputBoxActions.type(enterName, value);
        return this;
    }
    this.clickSelectIcon = function () {
        buttonActions.click(selectIcon)
        return this;
    }

    this.clickAddmenuType = function () {
        buttonActions.click(addmenuType)
        return this;
    }
    this.clickCheckBox = function () {
        buttonActions.click(clickCheckbox)
        return this;
    }
    this.clickEditCstmList = function () {
        buttonActions.click(editNotInList)
        return this;
    }
    this.REenterCustomName = function (value) {
        inputBoxActions.type(reEnterName, value);
        return this;
    }
    this.clickEditSelectIcon = function () {
        buttonActions.click(SelectIcon1)
        return this;
    }
    this.clickUpdateCustomeType = function () {
        buttonActions.click(updatMenuType)
        return this;
    }
    this.clickDeleteMenuType = function () {
        buttonActions.click(deleteMenuType)
        return this;
    }
    this.clickDeletePopUp = function () {
        buttonActions.click(deletepopupmenutype)
        return this;
    }



    //not in the list flow
    this.catagoriesNotInTheList = function (enterName, reEnterName) {
        this.clickeditMenuType()
        waitActions.waitForElementIsDisplayed()
        this.clickNotInTheList()
        waitActions.waitForElementIsDisplayed()
        this.enterCustomMenuType(enterName)
        waitActions.waitForElementIsDisplayed()
        this.clickSelectIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickAddmenuType()
        waitActions.wait()
        this.clickCheckBox()
        waitActions.waitForElementIsDisplayed()
        //update not in list
      //  this.clickEditCstmList()
        //waitActions.waitForElementIsDisplayed()
        // this.REenterCustomName(reEnterName)
        // waitActions.waitForElementIsDisplayed()
        // this.clickEditSelectIcon()
        // waitActions.waitForElementIsDisplayed()
        // this.clickUpdateCustomeType()
        waitActions.wait()
        //delete not in list

        this.clickDeleteMenuType()
        waitActions.wait()
        waitActions.wait()
        this.clickDeletePopUp()
        waitActions.wait()
        this.updateMenuType()
        browser.navigate().refresh()
        waitActions.wait()
    }
    //select all flow
    //***************menu type completed*********
    var selectFood = objLocator.findLocator(objRepo.menuCatagories.selectFood)
    var cuisigneType = objLocator.findLocator(objRepo.menuCatagories.cuisigneType)
    
    var selectContinetal = objLocator.findLocator(objRepo.menuCatagories.selectContinetal)
    var selectitalian = objLocator.findLocator(objRepo.menuCatagories.selectitalian)
    var cusingeSave = objLocator.findLocator(objRepo.menuCatagories.cusingeSave)
    var editCusingeType = objLocator.findLocator(objRepo.menuCatagories.editCusingeType)
    var UnselectIndian = objLocator.findLocator(objRepo.menuCatagories.UnselectIndian)
    var unselectChinese = objLocator.findLocator(objRepo.menuCatagories.unselectChinese)
    var UpdateCusigne = objLocator.findLocator(objRepo.menuCatagories.UpdateCusigne)
    var slelectAllCuisineType = objLocator.findLocator(objRepo.menuCatagories.slelectAllCuisineType)

    this.SelectFoodIcon = function () {
        buttonActions.click(selectFood)
        return this;
    }
    this.clickCusineType = function () {
        buttonActions.click(cuisigneType)
        return this;
    }
    
    this.clickContinetal = function () {
        buttonActions.click(selectContinetal)
        return this;
    }
    this.clickSelectItalian = function () {
        buttonActions.click(selectitalian)
        return this;
    }
    this.clickCuiseneSave = function () {
        buttonActions.click(cusingeSave)
        return this;
    }
    this.clickEditCusineType = function () {
        buttonActions.click(editCusingeType)
        return this;
    }
    this.clickUnselectIndian = function () {
        buttonActions.click(UnselectIndian)
        return this;
    }
    this.clickUnselectChinese = function () {
        buttonActions.click(unselectChinese)
        return this;
    }
    this.clickUpdateCusign = function () {
        buttonActions.click(UpdateCusigne)
        return this;
    }
    this.clickSelectAllCusineType = function () {
        buttonActions.click(slelectAllCuisineType)
        return this;
    }

    this.addCuisigneType = function () {
        this.clickControlPanel()
        waitActions.wait()
        this.SelectFoodIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickCusineType()
        waitActions.waitForElementIsDisplayed()
       
         //this.clickContinetal()
        // waitActions.wait()
        // this.clickSelectItalian()
        // waitActions.wait()
        // this.clickSelectAllCusineType()
        // waitActions.wait()
        // this.clickCuiseneSave()
        // waitActions.wait()


    }
    // this.UpdateCuisigneType = function () {
    //     this.clickEditCusineType()
    //     waitActions.waitForElementIsDisplayed()
    //     this.clickUnselectIndian()
    //     waitActions.wait()
    //     this.clickUnselectChinese()
    //     waitActions.waitForElementIsDisplayed()
    //     this.clickUpdateCusign()
    //     waitActions.wait()

    // }
    var cusineNotInLIst = objLocator.findLocator(objRepo.menuCatagories.cusineNotInLIst)
    var EnterNotInList = objLocator.findLocator(objRepo.menuCatagories.EnterNotInList)
    var AddCusineType = objLocator.findLocator(objRepo.menuCatagories.AddCusineType)
    var customCheckBox = objLocator.findLocator(objRepo.menuCatagories.customCheckBox)
    var editButonCusineType = objLocator.findLocator(objRepo.menuCatagories.editButonCusineType)
    var reEnterCusineType = objLocator.findLocator(objRepo.menuCatagories.reEnterCusineType)
    var clickUpdateCusine = objLocator.findLocator(objRepo.menuCatagories.clickUpdateCusine)
    var customDeleteButton = objLocator.findLocator(objRepo.menuCatagories.customDeleteButton)
    var deletePopUp = objLocator.findLocator(objRepo.menuCatagories.deletePopUp)
    var disableMenuType = objLocator.findLocator(objRepo.menuCatagories.disableMenuType)
    var deleteButton = objLocator.findLocator(objRepo.menuCatagories.deleteButton)
    var deleteMenuPopup = objLocator.findLocator(objRepo.menuCatagories.deleteMenuPopup)

    this.clickCusineNotInList = function () {
        buttonActions.click(cusineNotInLIst)
        return this;
    }
    this.enterCusineType = function (value) {
        inputBoxActions.type(EnterNotInList, value);
        return this;
    }
    this.clickAddCusugneType = function () {
        buttonActions.click(AddCusineType)
        return this;
    }
    this.clickAddCustomCheckBox = function () {
        buttonActions.click(customCheckBox)
        return this;
    }

    this.clickEditCustom = function () {
        buttonActions.click(editButonCusineType)
        return this;
    }
    this.enterEditCusineType = function (value) {
        inputBoxActions.type(reEnterCusineType, value);
        return this;
    }
    this.clickUpdateCusine = function () {
        buttonActions.click(clickUpdateCusine)
        return this;
    }
    this.clickCustomDeleteButton = function () {
        buttonActions.click(customDeleteButton)
        return this;
    }
    this.clickDeletePopUp = function () {
        buttonActions.click(deletePopUp)
        return this;
    }
    this.clickDisableMenuType = function () {
        buttonActions.click(disableMenuType)
        return this;
    }
    this.clickDeletMenuType = function () {
        buttonActions.click(deleteButton)
        return this;
    }
    this.clickDeleteMenuPopup = function () {
        buttonActions.click(deleteMenuPopup)
        return this;
    }
    this.cusigneNotInList = function (EnterNotInList, reEnterCusineType) {
        this.clickEditCusineType()
        waitActions.waitForElementIsDisplayed()

        this.clickCusineNotInList()
        waitActions.waitForElementIsDisplayed()

        this.enterCusineType(EnterNotInList)
        waitActions.waitForElementIsDisplayed()

        this.clickAddCusugneType()
        waitActions.wait()
        //edit
        this.clickAddCustomCheckBox()
        waitActions.waitForElementIsDisplayed()
        this.clickEditCustom()
        waitActions.waitForElementIsDisplayed()
        this.enterEditCusineType(reEnterCusineType)
        waitActions.wait()
        this.clickUpdateCusine()
        waitActions.waitForElementIsDisplayed()
        //delete
        this.clickCustomDeleteButton()
        waitActions.wait()
        this.clickDeletePopUp()
        waitActions.wait()
        this.clickUpdateCusign()
        waitActions.wait()
    }
    this.disableCusineType = function () {
        this.clickEditCusineType()
        waitActions.wait()
        this.clickDisableMenuType()
        waitActions.wait()
        this.clickDisableMenuType()
        waitActions.wait()
        this.clickDeletMenuType()
        waitActions.wait()
        this.clickDeleteMenuPopup()
        waitActions.wait()
    }
    
    
    //***********cusine completd */
    var selectCusineTYpe = objLocator.findLocator(objRepo.menuCatagories.selectCusineTYpe)
    var SelectFoodType = objLocator.findLocator(objRepo.menuCatagories.SelectFoodType)
    var eastIndian = objLocator.findLocator(objRepo.menuCatagories.eastIndian)
    var pureVeg = objLocator.findLocator(objRepo.menuCatagories.pureVeg)
    var selectAllFood = objLocator.findLocator(objRepo.menuCatagories.selectAllFood)
    var saveFood = objLocator.findLocator(objRepo.menuCatagories.saveFood)
    var EditFoodtype = objLocator.findLocator(objRepo.menuCatagories.EditFoodtype)
    var FoodUpdate = objLocator.findLocator(objRepo.menuCatagories.FoodUpdate)
    var EastIndian2 = objLocator.findLocator(objRepo.menuCatagories.EastIndian2)
    var pureaveg2 = objLocator.findLocator(objRepo.menuCatagories.pureaveg2)
    var saveFoodType = objLocator.findLocator(objRepo.menuCatagories.saveFoodType)
    var foodNotInlIst=objLocator.findLocator(objRepo.menuCatagories.foodNotInlIst)
    var enterFoodType = objLocator.findLocator(objRepo.menuCatagories.enterFoodType)
    var clickNotInListFodType=objLocator.findLocator(objRepo.menuCatagories.clickNotInListFodType)
    var reenterfoodType=objLocator.findLocator(objRepo.menuCatagories.reenterfoodType)
    var foodDeletePopup=objLocator.findLocator(objRepo.menuCatagories.foodDeletePopup)
   
    this.clickCusineType = function () {
        buttonActions.click(selectCusineTYpe)
        return this;
    }
    this.clickfoodType = function () {
        buttonActions.click(SelectFoodType)
        return this;
    }
    this.clickEastIndian = function () {
        buttonActions.click(eastIndian)
        return this;
    }

    this.clickpureVEg = function () {
        buttonActions.click(pureVeg)
        return this;
    }
    this.clickSElectAllFood = function () {
        buttonActions.click(selectAllFood)
        return this;
    }
    this.clickSaveFood = function () {
        buttonActions.click(saveFood)
        return this;
    }
    this.clickEditFood = function () {
        buttonActions.click(EditFoodtype)
        return this;
    }
    this.clickUnselectEastIndian = function () {
        buttonActions.click(EastIndian2)
        return this;
    }
    this.clickUnselectpureVeg = function () {
        buttonActions.click(pureaveg2)
        return this;
    }
    this.clickFoodUpdate = function () {
        buttonActions.click(FoodUpdate)
        return this;
    }
    this.clicksaveFoodType = function () {
        buttonActions.click(saveFoodType)
        return this;
    }
    this.clickFoodNotInList = function () {
        buttonActions.click(foodNotInlIst)
        return this;
    }
    this.enterEnterfoodType = function (value) {
        inputBoxActions.type(enterFoodType, value);
        return this;
    }
   

    this.clicksaveFoodNotInlistfd = function () {
        buttonActions.click(clickNotInListFodType)
        return this;
    }
    this.reEnterEnterfoodType = function (value) {
        inputBoxActions.type(reenterfoodType, value);
        return this;
    }
    this.clickfooddeletepopUp = function () {
        buttonActions.click(foodDeletePopup)
        return this;
    }

    this.addFoodType = function () {
        this.clickControlPanel()
        waitActions.waitForElementIsDisplayed()
        this.SelectFoodIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickCusineType()
        waitActions.wait()
        this.clickfoodType()
        waitActions.waitForElementIsDisplayed()
        this.clickpureVEg()
        waitActions.wait()
        this.clickEastIndian()
        waitActions.wait()
        this.clickSElectAllFood()
        waitActions.wait()
        this.clickSaveFood()
        waitActions.wait()
    }

    this.UpdateFoodType = function () {

        this.clickEditFood()
        waitActions.waitForElementIsDisplayed()
        this.clickUnselectEastIndian()
        waitActions.wait()
        this.clickUnselectpureVeg()
        waitActions.waitForElementIsDisplayed()
        this.clickFoodUpdate()
        waitActions.wait()

    }
    this.foodNotinList = function (enterFoodType,reenterfoodType){
        this.clickEditFood()
        waitActions.wait()
        this.clickFoodNotInList()
        waitActions.wait()

        this.enterEnterfoodType(enterFoodType,)
        waitActions.wait()

        this.clicksaveFoodType()
        waitActions.wait()
        
        this.clicksaveFoodNotInlistfd ()
        waitActions.wait()

            this.clickEditCustom()
        waitActions.waitForElementIsDisplayed()
        
        this.reEnterEnterfoodType(reenterfoodType)
        waitActions.waitForElementIsDisplayed()
        this.clickFoodUpdate()
        waitActions.waitForElementIsDisplayed()
        this.clickCustomDeleteButton()
        waitActions.waitForElementIsDisplayed()
        this.clickfooddeletepopUp()
        waitActions.wait()
        this.clickFoodUpdate()
        waitActions.wait()
    }
    this.diabaleAndEnable = function(){
        this.clickEditFood()
        waitActions.waitForElementIsDisplayed()
        this.clickDisableMenuType()
        waitActions.waitForElementIsDisplayed()
        this.clickDisableMenuType()
        waitActions.waitForElementIsDisplayed()
        this.clickDeletMenuType()
        waitActions.wait()
        this.clickDeleteMenuPopup()
        waitActions.wait()

    }

    //*************foodtype completed**************
    var EastIndian = objLocator.findLocator(objRepo.subfooodtype.EastIndian)
    var clickSubFoodType = objLocator.findLocator(objRepo.subfooodtype.clickSubFoodType)
var selectIndian=objLocator.findLocator(objRepo.subfooodtype.selectIndian)
var saveSubFood=objLocator.findLocator(objRepo.subfooodtype.saveSubFood)
var customfoodcheckbox=objLocator.findLocator(objRepo.subfooodtype.customfoodcheckbox)
var deleteFood=objLocator.findLocator(objRepo.subfooodtype.deleteFood)
var deletePopUp=objLocator.findLocator(objRepo.subfooodtype.deletePopUp)
    this.clickEastIndian = function () {
        buttonActions.click(EastIndian)
        return this;
    }
    this.clickSubFoodType = function () {
        buttonActions.click(clickSubFoodType)
        return this;
    }
    this.clickselectIndian = function () {
        buttonActions.click(selectIndian)
        return this;
    }
    this.saveSubFoodType = function () {
        buttonActions.click(saveSubFood)
        return this;
    }
    this.clickcheckBox = function () {
        buttonActions.click(customfoodcheckbox)
        return this;
    }
    this.clickdelete = function () {
        buttonActions.click(deleteFood)
        return this;
    }
    this.clickdeletepop = function () {
        buttonActions.click(deletePopUp)
        return this;
    }

    
    this.addSubfoodtype = function(enterFoodType,reenterfoodType){
        this.clickControlPanel()
        waitActions.waitForElementIsDisplayed()
        this.SelectFoodIcon()
        waitActions.waitForElementIsDisplayed()
         this.clickselectIndian()
        waitActions.waitForElementIsDisplayed()
        this.clickEastIndian()
        waitActions.wait()
        this.clickSubFoodType()
        waitActions.wait()
        this.clickFoodNotInList()
        waitActions.wait()
        this.enterEnterfoodType(enterFoodType)
        waitActions.wait()

        this.saveSubFoodType()
        waitActions.wait()
        this.clickcheckBox()
        waitActions.wait()
        this.clickEditCustom()
        waitActions.waitForElementIsDisplayed()
        
        this.reEnterEnterfoodType(reenterfoodType)
        waitActions.waitForElementIsDisplayed()
        this.clickFoodUpdate()
        waitActions.waitForElementIsDisplayed()
        this.clickCustomDeleteButton()

        waitActions.waitForElementIsDisplayed()
        this.clickdelete()
        waitActions.wait()
       
        this.clickDisableMenuType()
        waitActions.wait()
        this.clickDisableMenuType()
        waitActions.wait()
        this.clickDeletMenuType()
        waitActions.wait()
        this.clickdeletepop()
        waitActions.wait()


    }
    

}