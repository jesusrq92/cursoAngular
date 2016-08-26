// La receta CONSTANTE
	//.constant es la sintaxis para asignar un valor en servicios
angular.module("services", [])
	.constant("messageText", "Hello constant!") //le pasamos una cadena con constant
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
