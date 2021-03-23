describe('Login Logout Test cases execution ', function () {
 
    'use strict';
 
    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var leftNavigationPage = new pages.leftNavigationPage();
    var AdminDetailsPage = new pages.AdminDetailsPage();
    it('Login-Logout',function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        //dashBoardPage.logout();

    });
    it('Admindetaispage details save',function()
    {
        leftNavigationPage.navigateToRestaurantProfile();
        AdminDetailsPage.navigateToAdmindetail();
        AdminDetailsPage.admin(testData.Admin.phoneNumber1,
            testData.Admin.phoneNumber2,testData.Admin.emailid,
            testData.Admin.emailid2,testData.Admin.gstNumber,
            testData.Admin.vatNumber,testData.Admin.panNumber,
            testData.Admin.fssiNumber,testData.Admin.pdf)  
    });
 
});
