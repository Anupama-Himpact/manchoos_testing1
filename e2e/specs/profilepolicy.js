describe('Login Logout Test cases execution ', function () {
 
    'use strict';
 
    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var leftNavigationPage = new pages.leftNavigationPage();
    var covidpolicypage = new pages.covidpolicypage();
 
 
    it('Login-Logout', function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        //dashBoardPage.logout();
    });
    it('covidpolicypage details save',function()
    {
        leftNavigationPage.navigateToRestaurantProfile();
        covidpolicypage.covidAction();
        //Restorantpage.clickrestorantKyc();
    });
 
});

