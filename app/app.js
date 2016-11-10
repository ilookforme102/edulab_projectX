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
var App = angular.module('myApp',['ui.router','ngMaterial'
]);

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

// it should be in view2.html, get it there asap.

    .controller('AppCtrl', function($scope) {
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;

        $scope.googleUrl = 'http://google.com';

    })
.controller('RatingCtrl', function($scope) {
    $scope.rating1 = 5;
    $scope.rating2 = 5;
    $scope.rating3 = 5;
    $scope.rating4 = 5;
    $scope.rating5 = 5;
    $scope.rating6 = 5;
    $scope.rating7 = 5;


    $scope.rateFunction = function(rating) {
        console.log('Rating selected - ' + rating);
    };
})
    .directive('starRating',
        function() {
            return {
                restrict : 'AE',
                template : '<ul class="rating">'
                + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
                + '\u2605'
                + '</li>'
                + '</ul>',
                scope : {
                    ratingValue : '=',
                    max : '=',
                    onRatingSelected : '&'
                },
                link : function(scope, elem, attrs) {
                    var updateStars = function() {
                        scope.stars = [];
                        for ( var i = 0; i < scope.max; i++) {
                            scope.stars.push({
                                filled : i < scope.ratingValue
                            });
                        }
                    };

                    scope.toggle = function(index) {
                        scope.ratingValue = index + 1;
                        scope.onRatingSelected({
                            rating : index + 1
                        });
                    };

                    scope.$watch('ratingValue',
                        function(oldVal, newVal) {
                            if (newVal) {
                                updateStars();
                            }
                        }
                    );
                }
            };
        }
    );