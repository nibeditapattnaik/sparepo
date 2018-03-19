(function () {
    'use strict' ;//To avoid global variables in your application

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', function ($scope) {
        $scope.name = "";
        //$scope.nm = "abc";
        $scope.totalNumericValue = 0;

        $scope.displayNumeric = function() {
            var totalNameValue = calculateNumericForString($scope.name);//get total value
            $scope.totalNumericValue = totalNameValue;
        };
        function calculateNumericForString(string){
            var totalStringValue = 0;
            for (var i=0; i < string.length; i++ ){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
    })   
    
})();