'use strict';

// Declare app level module which depends on views, and components
/*
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
*/
var App = angular.module('myApp',['ui.router','ngMaterial', 'ngMessages','material.svgAssetsCache']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  // For any unmatched url, send to /business
  $urlRouterProvider.otherwise("/business");

  $stateProvider
      .state('business', {//State demonstrating Nested views
        url: "/business",
        templateUrl: "view1/view1.html"
      })
      /*.state('business.products', {//nested state [products is the nested state of business state]
        url: "/products",
        templateUrl: "products.html",
        controller: function($scope){
          $scope.products = ["Computer", "Printers", "Phones", "Bags"];
        }
      })
      .state('business.services', {//nested state [services is the nested state of business state]
        url: "/services",
        templateUrl: "services.html",
        controller: function($scope){
          $scope.services = ["Selling", "Support", "Delivery", "Reparation"];
        }
      })
*/
      .state('portfolio', {//State demonstrating Multiple,named views
        url: "/portfolio",
          templateUrl: "view2/view2.html"
       /* views: {
          ""  :    { templateUrl: "view2.html" },
          "view1@portfolio": { template: "Write whatever you want, it's your virtual company." },
          "view2@portfolio": { templateUrl: "clients.html" ,
            controller: function($scope){
              $scope.clients = ["HP", "IBM", "MicroSoft"];
            }
          }
        }          }*/

      })
}])
    .controller('AppCtrl', function($scope) {
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;

        $scope.googleUrl = 'http://google.com';

    })
    .controller ('checkboxCtrl', function ($scope) {
        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;
        $scope.data.cb3 = false;
        $scope.data.cb4 = false;
        $scope.data.cb5 = false;
        $scope.data.cb6 = false;
        $scope.data.cb7 = false;
        $scope.data.cb8 = false;
        $scope.data.cb9 = false;
        $scope.data.cb10 = false;
        $scope.data.cb11 = false;
        $scope.data.cb12 = false;
        $scope.data.cb13 = false;
        $scope.data.cb14 = false;
        $scope.data.cb15 = false;
        $scope.data.cb16 = false;
        $scope.data.cb17 = false;
        $scope.data.cb18 = false;
        $scope.data.cb19 = false;
        $scope.data.cb20 = false;
        $scope.data.cb21 = false;



    })
    .controller('DateCtrl', function($scope) {
        $scope.myDate = new Date();

        $scope.minDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() - 2,
            $scope.myDate.getDate());

        $scope.maxDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() + 2,
            $scope.myDate.getDate());

        $scope.onlyWeekendsPredicate = function(date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        };
    })
    .controller('titleCtrl', function() {

    })


    .controller('AppCtrls', function() {
    this.items = [];
    for (var i = 0; i < 1000; i++) {
        this.items.push(i);
    }
});

// just to test if it works

