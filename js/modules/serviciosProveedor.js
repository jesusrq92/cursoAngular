// La receta PROVEEDOR
	//.provider es la sintaxis para manejor de provedores
angular.module("services", [])
.provider("message", [function () {
    var text = null;

    this.setText = function (textString) {
        text = textString;
    };

    this.$get = [function () {
        return new Message(text);
    }];
}]);

function Message(text) {
    this.text = text;
}