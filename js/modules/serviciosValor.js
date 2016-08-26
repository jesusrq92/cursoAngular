// La receta VALOR
	//.value es la sintaxis para inyectar variables
angular.module("services", [])
	.value("msgService", "Hola mundo desde servicios por RECETA VALOR");   //.value(nombre_valor y lo que va a contener)