(function (){
    'use strict';
    angular.module('myFirstApp', [])
    .controller('MyFirstController', function ($scope ){
        $scope.name = "Nibedita" ;
        $scope.sayHello = function(){
        return "Hello";
        };
  });

})();