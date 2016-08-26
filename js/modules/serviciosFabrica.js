// La receta de la FÁBRICA
	//.factory es la sintaxis para inyectar funciones
angular.module("services", [])
    .value("factor", 6)				//.value(nombre_valor y lo que va a contener)   factor = 6
    .factory("square", ["factor",   //.factory(nombre_funcion y lo que va a contener que es una funcion poniendo cosas q se jugaran)
    	function (factor) { 		 
            return factor * factor; //regresa 36 a square que es la funcion	
   		}
    ]);