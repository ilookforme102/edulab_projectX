'use strict';
// Declare app level module which depends on views, and components
var myApp = angular.module('myApp',['ui.router','ngMaterial','ngMessages'])
.config(['$stateProvider', '$urlRouterProvider','$mdThemingProvider', function($stateProvider, $urlRouterProvider,$mdThemingProvider){
    // For any unmatched url, send to /business
    $mdThemingProvider
        .theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login', {//State demonstrating Nested views
            url: "/login",
            templateUrl: "login/login.html"
        })
        .state('home', {//State demonstrating Nested views
            url: "/home",
            templateUrl: "view1/view1.html"
        })
        .state('progress', {//State demonstrating Multiple,named views
            url: "/progress",
            templateUrl: "view2/view2.html"

        })
}]);
