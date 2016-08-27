/*****************************************************************/
//Utilizare el mismo modulo y controlador para todos los ejemplos//
/*****************************************************************/

angular.module('root', ["filters"])
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
			{id: 1, name: "Hockey puck", price: 14, pubdate: new Date('2014', '03', '08'), cover: "images/picture.png", likes:0},
			{id: 2, name: "Golf club", price: 19, pubdate: new Date('2014', '03', '08'), cover: "images/picture.png", likes:0},
			{id: 3, name: "Baseball bat", price: 8, pubdate: new Date('2014', '03', '08'), cover: "images/picture.png", likes:0},
			{id: 4, name: "Lacrosse stick", price: 10, pubdate: new Date('2014', '03', '08'), cover: "images/picture.png", likes:0}
		];
        $scope.plusOne = function(index) {
            $scope.products[index].likes += 1; //accedemos a likes
        };

		$scope.records = [
	        "Alfreds Futterkiste",
	        "Berglunds snabbköp",
	        "Centro comercial Moctezuma",
	        "Ernst Handel",
      	]

      	//ejemplo 5
      	$scope.isFirstElementVisible = true;
		$scope.isSecondElementVisible = true;

        //ejemplo 6 (SERVICES)


        //ejemplo 7 
        //$watch nos proporciona una manera de mantener los valores calculados hasta la fecha cuando los valores que dependen de cambio.
        $scope.factor = 6;
        $scope.$watch("factor", function (factor) {
            $scope.product = factor * 2;
        });

        //ejemplo 8 (SOLO SE INYECTA FILTROS EN EL MÓDULO) YA ESTÁ EN EL ROOT 
        /*
        angular.module("root", ["filters"])
            .controller("index", [function() {}]);
        */


    }]);











