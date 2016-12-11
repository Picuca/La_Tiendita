angular
  .module('update-inventory')
  .component('updateInventory', {
    templateUrl: 'views/update-inventory.template.html',

}).controller('inventoryCtrl',

         function ($scope, $http,addItemService) {

          event.preventDefault();
          event.stopPropagation();

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
            $scope.sizeSelection;

              $scope.itemSizes = [
                 { name: '10 - 12',  selected: false },
                 { name: '14 - 16',  selected: false },
                 { name: 'Pequeña',  selected: false },
                 { name: 'Mediana',  selected: false },
                 { name: 'Grande',   selected: false },
                 { name: 'Extra Grande', selected: false},
                 { name: 'Extra Extra Grande', selected: false}
               ];

               $scope.updateSelection = function(position, itemSizes) {

                 angular.forEach(itemSizes, function(itemSize, index) {
                   if (position != index)
                     itemSize.selected = false;
                    $scope.sizeSelection = itemSizes[position].name;
                    console.log("Size selection is: " + $scope.sizeSelection);
                 });
               }


             $scope.addItem = function(articleName, selectedType, descripcion, articlePrice, imageurl, autor, fabricante, casaPublicadora, cantidadArticulo) {



             for(var i =0 ;i < $scope.itemSizes.length ;i++){
                if($scope.itemSizes[i].selected == true){

                sizeSelection = $scope.itemSizes[i].name;

                }
                }

           console.log($scope.sizeSelection);

             if(selectedType == 'Camisa' || selectedType == 'Pantalon' || selectedType == 'Gorra'){

                    if(selectedType == 'Camisa'){
                        addItemService.addClothes(articleName,'shirt',descripcion,articlePrice,imageurl,                               sizeSelection,cantidadArticulo);

                    }else if(selectedType == 'Pantalon'){
                       addItemService.addClothes(articleName,'pant',descripcion,articlePrice,                                      imageurl, sizeSelection, cantidadArticulo);

                    }else{
                      addItemService.addClothes(articleName,'hat',descripcion,articlePrice,                                        imageurl,sizeSelection, cantidadArticulo);

                    }
             }else if(selectedType == 'Libro'){

             addItemService.addBook(articleName,'book',descripcion,articlePrice,imageurl,                                   autor, casaPublicadora, cantidadArticulo);


             }else if(selectedType == 'Articulo escolar'){
              addItemService.addArticle(articleName,'schoolsupplies',descripcion,articlePrice,imageurl,                               fabricante, cantidadArticulo);

             }



            }


}
                   );
