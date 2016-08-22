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

		//ejemplo 6 CONTIENE VARIAS RECETAS

// La receta VALOR
angular.module("root", ["services"])  //crear modulo root e INYECTAR modulo servicios
	.controller("index", ["$scope", "msgService", //nombre controlador y dependencias con las que va a jugar la funcion ("instancias de modulos", servicio y root) 
		function($scope, msgService) {            //funcion con las dependencias a jugar
			$scope.scopeMsgService = msgService;  //scope.nombre_de_scope = instancia_de_servicios para este ejemplo....
		}
	]);	

// La receta de la Fábrica
angular.module("root", ["services"])
    .controller("index", ["$scope", "square", //nombre controlador y dependencias con las que va a jugar la funcion ("instancias de modulos", servicio y root) 
        function ($scope, square) {		//funcion con las dependencias a jugar
            $scope.product = square;   //guarda en el scope product un el valor de la funcion square 36
        }
    ]);

// La receta Servicio
angular.module("root", ["services"])
    .controller("index", ["$scope", "multiplier",
        function ($scope, multiplier) {
            $scope.productServ = multiplier.multiply(2);
        }
    ]);





