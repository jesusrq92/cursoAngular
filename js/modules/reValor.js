// La receta VALOR
angular.module("root", ["services"])  //crear modulo root e INYECTAR modulo servicios
	.controller("index", ["$scope", "msgService", //nombre controlador y dependencias con las que va a jugar la funcion ("instancias de modulos", servicio y root) 
		function($scope, msgService) {            //funcion con las dependencias a jugar
			$scope.scopeMsgService = msgService;  //scope.nombre_de_scope = instancia_de_servicios para este ejemplo....
		}
	]);	