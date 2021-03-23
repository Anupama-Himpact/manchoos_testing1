describe('Login Logout Test cases execution ', function () {
 
    'use strict';
 
    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var leftNavigationPage = new pages.leftNavigationPage();
    var emailConfigarationPage = new pages.emailConfigarationPage();
    it('Login-Logout',function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        //dashBoardPage.logout();
    });
    it('Admindetaispage details save',function()
    {
        leftNavigationPage.navigateToRestaurantProfile();
        emailConfigarationPage.navigateToEmailConfigaration();
        emailConfigarationPage.email(testData.email.username,testData.email.password,testData.email.host,testData.email.PortNumber,testData.email.fromEmail)  
        emailConfigarationPage.emailConfig(testData.email.updateUsername,testData.email.updatepassword,testData.email.updatehost)
    });
 

});