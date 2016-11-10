/**
 * Created by Khoa's PC on 11/10/2016.
 */
myApp.controller ('checkboxCtrl', function ($scope) {
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
myApp.controller('DateCtrl', function($scope) {
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
myApp.controller('titleCtrl', function() {

    })