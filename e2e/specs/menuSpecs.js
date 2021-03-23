describe('Login Logout Test cases execution ', function () {
 
    'use strict';
 
    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var leftNavigationPage = new pages.leftNavigationPage();
    var menuPage = new pages.menuPage();
    it('Login-Logout',function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        //dashBoardPage.logout();
    });
    it('menu add flow',function(){
leftNavigationPage.navigateToMenu();
//menuPage.addmenuitems(testData.menu.itemName,testData.menu.discription,testData.menu.uploadProfilePic,
  //  testData.menu.uniqueCode,testData.menu.price,testData.menu.discount)
//menuPage.AddcusineTYpe()
menuPage.addFoodType()
// waitActions.waitForElementIsDisplayed()
    // menuPage.editNotInList(testData.menu.item2,testData.menu.discription1,
    //     testData.menu.uniqueCode1,testData.menu.price1,testData.menu.discount1)
    //     menuPage.deleteNotinList()


    })
});