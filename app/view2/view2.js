
/*
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);
*/

/*hello

 */


    App.controller('mainController', function($scope) {
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

