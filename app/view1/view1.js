myApp.controller('leftnavCtrl', function ($scope) {
    $scope.isOpen = false;
    $scope.menuId = 0;

    $scope.closeSidenav = function () {
        if ($scope.isOpen) {
            $scope.toggleExpanded(0);
            $scope.isOpen = false;
        }
    };

    $scope.toggleExpanded = function (selectedMenuId) {
        if (!$scope.isOpen) {
            $scope.isOpen = true;
            $scope.menuId = selectedMenuId;
        } else {
            if ($scope.menuId === selectedMenuId) {
                $scope.isOpen = false;
                selectedMenuId = 0;
            }
            $scope.menuId = selectedMenuId;
        }
    };
// Drop-down menu on top
    $scope.isSelected = function (value) {
        return $scope.menuId === value;
    };
    $scope.openMenu = function($mdOpenMenu, event) {
        $mdOpenMenu(event);
    };
    $scope.redirect = function () {
        window.location = "#/login"
    };


});
