//la receta CONSTANTE
angular.module("root", ["services"])
    .config(["messageProvider", "messageText",
        function (messageProvider, messageText) {
            messageProvider.setText(messageText);
        }])
    .controller("index", ["$scope", "message",
        function ($scope, message) {
            $scope.ConstantMensaje = message.text;
    }]);