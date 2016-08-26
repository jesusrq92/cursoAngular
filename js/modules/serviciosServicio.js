// La receta SERVICIO
	//.service es la sintaxis para inyectar funciones mas limpias
angular.module("services", [])
    .value("factor", 6)
    .service("multiplier", ["factor", Multiplier]);
  //.service("myService", ["dependency", MyObject]);


function Multiplier(factor) {
	this.multiply = function (controllerFactor) {  //hacemos la operacion pasando un 2
		return factor * controllerFactor;   //6 * 2 -> multiplier.multiply(2)
	};
}
	
	/*function MyObject(dependency) {
	    this.value = dependency.value;
	}*/