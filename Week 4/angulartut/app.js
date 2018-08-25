// Just a simple app
var app = angular.module("HangmanApp", []);
app.controller("GameController", ['$scope', function($scope){
    // Dependency Injection
    $scope.demo = "somestring"  // I want this to be avaliable in the body
}])