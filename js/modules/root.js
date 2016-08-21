/*****************************************************************/
//Utilizare el mismo modulo y controlador para todos los ejemplos//
/*****************************************************************/

angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
    	// ejemplo 1
        $scope.message = "Hola a todos desde angular";
        $scope.messageNombre = "Jesús";


        // ejemplo 2 
        $scope.yourname;
        $scope.favoriteWord;
        $scope.favoriteColor;
        $scope.favoriteShape;


        // ejemplo 3
		$scope.isRed = function () { return $scope.value =='rojo'; };
		$scope.isGreen = function () { return $scope.value =='verde'; };
		$scope.isBlue = function () { return $scope.value =='azul'; };


		//ejemplo 4
		$scope.products = [
			{id: 1, name: "Hockey puck"},
			{id: 2, name: "Golf club"},
			{id: 3, name: "Baseball bat"},
			{id: 4, name: "Lacrosse stick"}
		];

		$scope.records = [
	        "Alfreds Futterkiste",
	        "Berglunds snabbköp",
	        "Centro comercial Moctezuma",
	        "Ernst Handel",
      	]

      	//ejemplo 5
      	$scope.isFirstElementVisible = true;
		$scope.isSecondElementVisible = true;

    }]);



