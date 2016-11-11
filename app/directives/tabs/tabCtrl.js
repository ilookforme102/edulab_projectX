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

    });
/* Goals ctrl */

myApp.controller('nameCtrl', function($scope){
    $scope.isClick = true;
    $scope.names = ['Content1', 'Content2', 'Content3'];
    $scope.isSkill = true;
    $scope.skills =['Content1', 'Content2', 'Content3'];
    $scope.addName = function() {
        $scope.names.push($scope.enteredName);
        $scope.enteredName = '';
    };
    $scope.removeName = function(name) {
        var i = $scope.names.indexOf(name);
        // splice where to start, how many to remove
        $scope.names.splice(i, 1);
    };
    $scope.addSkill = function() {
        $scope.skills.push($scope.enteredSkill);
        $scope.enteredSkill = '';
    };
    $scope.removeSkill= function(skill) {
        var i = $scope.skills.indexOf(skill);
        // splice where to start, how many to remove
        $scope.skills.splice(i, 1);
    };
});
/*checklist ctrl Kushal */
myApp.controller('RatingCtrl', function($scope) {
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
    myApp.directive('starRating',
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
                link : function(scope, attrs) {
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