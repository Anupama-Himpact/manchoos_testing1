describe('Login Logout Test cases execution ', function () {
 
    'use strict';
 
    var testData = require('../resources/testData.json');
    var loginPage =  new pages.loginPage();
    var dashBoardPage  = new pages.dashBoardPage();
    var leftNavigationPage = new pages.leftNavigationPage();
    var catagoriesPage = new pages.catagoriesPage();
    it('Login-Logout',function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord);
        //dashBoardPage.logout();
    });

 it('menuFlow',function(){
         leftNavigationPage.navigateToMenu()
          catagoriesPage.menutypeAdd()
            catagoriesPage.menuTypeUpdate()
           catagoriesPage.catagoriesNotInTheList(testData.menuType.enterMenuType,testData.menuType.editName)
      //catagoriesPage.SelectAllswicth()
    
        dashBoardPage.logout();
    });

     //it('cuisineTypeflow',function(){
      //  loginPage.loginPage(testData.manchoos.baseUrl);
       //  loginPage.login(testData.credentials.userName,testData.credentials.passWord);
       // leftNavigationPage.navigateToMenu()
       // catagoriesPage.addCuisigneType()
        // catagoriesPage.UpdateCuisigneType()
        //catagoriesPage.cusigneNotInList(testData.menuType.enterCusineType,testData.menuType.reEnterCusineType)
        // catagoriesPage.disableCusineType()
         //dashBoardPage.logout();
     //})
     // it('foodTypeTypeflow',function(){
     // loginPage.loginPage(testData.manchoos.baseUrl);
          //  loginPage.login(testData.credentials.userName,testData.credentials.passWord);
                 // leftNavigationPage.navigateToMenu()
    //               catagoriesPage.addFoodType()
    //               catagoriesPage.UpdateFoodType()
    //               catagoriesPage.foodNotinList(testData.menuType.enterFoodType,testData.menuType.reEnterFoodType)
    //           catagoriesPage.diabaleAndEnable()
    //           dashBoardPage.logout();

    //   })
    //  it('sub-foodTypeTypeflow',function(){
    //      /// loginPage.loginPage(testData.manchoos.baseUrl);
    //          //  loginPage.login(testData.credentials.userName,testData.credentials.passWord);
    //                  leftNavigationPage.navigateToMenu()
    //          catagoriesPage.addSubfoodtype(testData.menuType.enterSubfoodtype,testData.menuType.reenterSubfoodtype)
    //     })
   

});
