

// La receta VALOR
	//.value es la sintaxis para inyectar variables
angular.module("services", [])
	.value("msgService", "Hola mundo desde servicios por RECETA VALOR");   //.value(nombre_valor y lo que va a contener)
																		  


// La receta de la Fábrica
	//.factory es la sintaxis para inyectar funciones
angular.module("services", [])
    .value("factor", 6)				//.value(nombre_valor y lo que va a contener)   factor = 6
    .factory("square", ["factor",   //.factory(nombre_funcion y lo que va a contener que es una funcion poniendo cosas q se jugaran)
    	function (factor) { 		 
            return factor * factor; //regresa 36 a square que es la funcion	
   		}
    ]);

// La receta Servicio
	//.service es la sintaxis para inyectar funciones mas limpias
angular.module("services", [])
    .value("factor", 6)
    .service("multiplier", ["factor", Multiplier]);


function Multiplier(factor) {
	this.multiply = function (controllerFactor) {  //hacemos la operacion pasando un 2
		return factor * controllerFactor;   //6 * 2 -> multiplier.multiply(2)
	};
}


/*
	    .service("myService", ["dependency", MyObject]);

	function MyObject(dependency) {
	    this.value = dependency.value;
}*/