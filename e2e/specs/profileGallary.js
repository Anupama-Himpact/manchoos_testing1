const gallarypage = require('../pages/gallarypage');

describe('Login Logout Test cases execution ', function () {
 
    'use strict';
 
    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var leftNavigationPage = new pages.leftNavigationPage();
    var gallarypage = new pages.gallarypage();
    it('Login-Logout',function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        //dashBoardPage.logout();
    });
    it('ambiance details save',function()
    {
        leftNavigationPage.navigateToRestaurantProfile();
        gallarypage.clickgallary(testData.gallaryImg.image,testData.gallaryImg.imagename);
        
    });
    it('add food', function(){
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        leftNavigationPage.navigateToRestaurantProfile();
      
        gallarypage.clickFood(testData.gallaryImg.image2,testData.gallaryImg.imagename2)
        dashBoardPage.logout();

    })
});
