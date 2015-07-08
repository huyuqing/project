var adminApp = angular.module("adminApp", ["ui.router"]);
 
adminApp.config(function ($stateProvider, $urlRouterProvider) {
 
     $urlRouterProvider
        .when("", "/login")
        .when("/home", "/home/manage")
        .when("/home/manage/add", "/home/manage/add/step1")
        .when("/home/manage/info", "/home/manage/info/basicinfo");
 
     $stateProvider
        .state("login", {
            url:"/login",
            templateUrl: "views/login.html",
            controller:"LoginCtrl"
        })
        .state("home", {
            url:"/home",
            templateUrl: "views/home.html"
        })
        .state("home.manage", {
            url:"/manage",
            templateUrl: "views/manage/manage_index.html",
        })
        .state("manage_add", {
            parent: "home",
            url:"/manage/add",
            templateUrl: "views/manage/manage_add.html",
            controller:"AddformController"
        })
        .state("manage_add.step1", {
            url:"/step1",
            templateUrl: "views/manage/manage_add_step1.html",   
            controller:"MapCtrl"      
        })
        .state("manage_add.step2", {
            url:"/step2",
            templateUrl: "views/manage/manage_add_step2.html",
        })
        // .state("manage_add.step3", {
        //     url:"/step3",
        //     templateUrl: "views/manage/manage_add_step3.html"
        // })
        .state("manage_add.step4", {
            url:"/step4",
            templateUrl: "views/manage/manage_add_step4.html",
        })
        .state("manage_info", {
            parent: "home",                                                                                
            url:"/manage/info",
            templateUrl: "views/manage/manage_info.html"
        })
        .state("manage_info.basicinfo", {
            url:"/basicinfo",
            templateUrl: "views/manage/manage_info_basic.html"
        })
        .state("manage_info.manageinfo", {
            url:"/manageinfo",
            templateUrl: "views/manage/manage_info_manage.html"
        })
        .state("manage_info.cashinfo", {
            url:"/cashinfo",
            templateUrl: "views/manage/manage_info_cash.html"
        })

        .state("home.ordinary", {
            url:"/ordinary",
            templateUrl: "views/ordinary/ordinary_index.html"
        })
        .state("home.cash", {
            url:"/cash",
            templateUrl: "views/cash/cash_index.html"
        })
        .state("home.wydata", {
            url:"/wydata",
            templateUrl: "views/wydata/wydata_index.html"
        })
        .state("home.system", {
            url:"/system",
            templateUrl: "views/system/system_index.html"
        })
});



// myApp.controller('MainCtrl', function($scope) {

//     // create a message to display in our view
//     $scope.message = 'Everyone come and see how good I look!';
// });

// adminApp.controller('ParentCtrl', function ($scope, $state) {
//   $scope.changeState = function () { 
//     $state.go('^');
//   };
// });
// $scope.isActive = function() {  
//    return $state.includes('playLotteries');
// }
