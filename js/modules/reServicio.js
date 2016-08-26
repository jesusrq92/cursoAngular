// La receta SERVICIO
angular.module("root", ["services"])
    .controller("index", ["$scope", "multiplier",
        function ($scope, multiplier) {
            $scope.productServ = multiplier.multiply(2);
        }
    ]);