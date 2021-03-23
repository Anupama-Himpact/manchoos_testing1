describe('Login Logout Test cases execution ', function () {
 
    'use strict';
 
    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var leftNavigationPage = new pages.leftNavigationPage();
    var featuresPage = new pages.featuresPage();
    it('Login-Logout',function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        //dashBoardPage.logout();
    });
    it('Featurespage details save',function()
    {
        leftNavigationPage.navigateToRestaurantProfile();
        featuresPage.feature();
        featuresPage.updateCatagory();
          dashBoardPage.logout();
    })
    it('cusign details',function(){
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        leftNavigationPage.navigateToRestaurantProfile();
        featuresPage.cuisiansSave()
        featuresPage.CuisinesUpdate()
        dashBoardPage.logout();
    })

    it('Amenities details',function(){
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        leftNavigationPage.navigateToRestaurantProfile();
        featuresPage.SaveAminites();
        featuresPage.updateAminites();
        dashBoardPage.logout();

    })
 
});
