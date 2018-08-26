angular.module('ContactsApp')
    .controller('ListController', function($scope, Contact) {
        //$scope.contacts = [];
        $scope.contacts = Contact.query();
        $scope.fields = ['firstName', 'lastName'];

        $scope.sort = function(field) {
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order; // Switch Sorting Order
        };

        $scope.sort.field = 'firstName';
        $scope.sort.order = false;      // Default: Sort by descending
    });