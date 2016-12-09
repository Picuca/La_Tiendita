angular
  .module('update-inventory')
  .component('updateInventory', {
    templateUrl: 'views/update-inventory.template.html',

}).controller('inventoryCtrl', function ($scope, $http) {

            $scope.itemTypes = ['Articulo escolar','Camisa','Gorra','Libro','Pantalon'];
            $scope.selectedType = '';

            $scope.articleName = '';
            $scope.descripcion = '';
            $scope.articlePrice = 0.00;
            $scope.imageurl = '';
            $scope.autor = '';
            $scope.fabricante = '';
            $scope.casaPublicadora = '';
            $scope.cantidadArticulo = 0;

            var parameters = {


            }




            $scope.selection = [];

              $scope.itemSizes = [
                 { name: '10 - 12',  selected: false , cantidad: 0},
                 { name: '14 - 16',  selected: false , cantidad: 0},
                 { name: 'Pequeña',  selected: false , cantidad: 0},
                 { name: 'Mediana',  selected: false , cantidad: 0},
                 { name: 'Grande',   selected: false , cantidad: 0},
                 { name: 'Extra Grande', selected: false, cantidad: 0},
                 { name: 'Extra Extra Grande', selected: false, cantidad: 0}
               ];


            $scope.selectedSize = function selectedSize() {
                return filterFilter($scope.itemSizes, { selected: true });
              };

             $scope.$watch('itemSizes|filter:{selected:true}', function (nv) {
                $scope.selection = nv.map(function (selectedSize) {
                  return itemSizes.name;
                });
              }, true);




             $scope.addItem = function(articleName, selectedType, descripcion, articlePrice, imageurl, autor, fabricante, casaPublicadora, cantidadArticulo) {


                        console.log(articleName);
                         console.log(selectedType);
                          console.log(descripcion);
                           console.log(articlePrice);
                            console.log(imageurl);
                             console.log(autor);
                              console.log(fabricante);
                               console.log(casaPublicadora);
                               console.log(cantidadArticulo);
                                console.log($scope.selectedSize);



                             }


}
                   );
