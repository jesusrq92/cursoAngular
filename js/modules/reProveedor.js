//la receta PROVEEDOR
angular.module("root", ["services"])
    .config(["messageProvider", function (messageProvider) {
        messageProvider.setText("Hello world servidor!");
    }])
    .controller("index", ["$scope", "message",
        function ($scope, message) {
            $scope.provedorMensaje = message.text;
        }
    ]);