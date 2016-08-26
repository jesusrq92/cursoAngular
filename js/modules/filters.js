angular.module("filters", [])
    .filter("round", function () {
        return function(input, precision) {
            return input ? parseFloat(input).toFixed(precision) : "";  //"2.00"
         //regresa input haz *ESTO* : "";
        };
    })
    .filter("dollars", function () {
        return function(input) {
            return input ? "$" + input : ""; //"$ + 2.00"
         //regresa input haz /*ESTO* : ""/
        };
    });

// SINTAX
/*
angular.module("root", [])
    .filter("doSomething", function () {
        return function(input) {
            // Return a value and transform the input 
        }
    });		
*/
