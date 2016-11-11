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
//Krishna progress
myApp.controller('mainController', function($scope) {
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchname   = '';     // set the default search/filter term

    // create the list of student
    $scope.progress_table = [
        { name: 'tom', student_comment: '', student_progress: 2 },
        { name: 'dick', student_comment: '', student_progress: 4 },
        { name: 'harry', student_comment: '', student_progress: 7 },
        { name: 'thomas', student_comment: '', student_progress: 6 },
        { name: 'john', student_comment: '', student_progress: 2 },
        { name: 'enna', student_comment: '', student_progress: 4 },
        { name: 'catherine', student_comment: '', student_progress: 7 },
        { name: 'pekka', student_comment: '', student_progress: 6 },
        { name: 'kari', student_comment: '', student_progress: 2 },
        { name: 'ninna', student_comment: '', student_progress: 4 },
        { name: 'teemu', student_comment: '', student_progress: 7 },
        { name: 'milton', student_comment: '', student_progress: 6 },
        { name: 'merkel', student_comment: '', student_progress: 2 },
        { name: 'tyoop', student_comment: '', student_progress: 4 },
        { name: 'ming', student_comment: '', student_progress: 7 },
        { name: 'eddie', student_comment: '', student_progress: 6 }



    ]});
