angular
  .module('update-inventory')
  .component('updateInventory', {
    templateUrl: 'views/update-inventory.template.html',

}).controller('inventoryCtrl', function ($scope, $http) {

            $scope.itemTypes = ['Articulo escolar','Camisa','Gorra','Libro','Pantalon'];
            $scope.selectedType = ''

             $scope.addItem = function (itemName,itemType, description, price) {


                            }


});
