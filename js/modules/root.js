/*****************************************************************/
//Utilizare eñ mismo modulo y controlador para todos los ejemplos//
/*****************************************************************/

angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.message = "Hola a todos desde angular";
        $scope.messageNombre = "Jesús";


        // ejemplo 2 
        $scope.yourname;
        $scope.favoriteWord;
        $scope.favoriteColor;
        $scope.favoriteShape;
    }]);



