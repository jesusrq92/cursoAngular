// La receta de la FÁBRICA
angular.module("root", ["services"])
    .controller("index", ["$scope", "square", //nombre controlador y dependencias con las que va a jugar la funcion ("instancias de modulos", servicio y root) 
        function ($scope, square) {		//funcion con las dependencias a jugar
            $scope.product = square;   //guarda en el scope product un el valor de la funcion square 36
        }
    ]);
