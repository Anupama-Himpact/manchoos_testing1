describe('Login Logout Test cases execution ', function () {
 
    'use strict';
 
    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var leftNavigationPage = new pages.leftNavigationPage();
    var bankingPage = new pages.bankingPage();
    it('Login-Logout',function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        //dashBoardPage.logout();
    });
    it('Bankingdetails',function()
    
    {
        leftNavigationPage.navigateToRestaurantProfile();
        bankingPage.navigateToBankingDetails();
        bankingPage.bank(testData.Accountdetails.accountNumber,testData.Accountdetails.conformAccountNumber,testData.Accountdetails.ifscNumber,testData.Accountdetails.accountName)  
        //bankingPage.otherBanking(testData.Accountdetails.newActNumber,testData.Accountdetails.newCofmAcTNub,testData.Accountdetails.newIfscNumber,testData.Accountdetails.newAccountName)
        //dashBoardPage.logout();
    });
    it('otherBanking Details',function(){
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        leftNavigationPage.navigateToRestaurantProfile();
        bankingPage.otherBanking(testData.Accountdetails.newActNumber,testData.Accountdetails.newCofmAcTNub,testData.Accountdetails.newIfscNumber,testData.Accountdetails.newAccountName)
        dashBoardPage.logout();

    })
 
});
