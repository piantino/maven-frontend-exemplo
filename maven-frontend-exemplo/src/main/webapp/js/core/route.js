angular.module("meuApp").config(["$routeProvider", function ($routeProvider) {
	$routeProvider.when("/inicio", {
		templateUrl: "js/modules/inicio/inicio.html",
		controller: "inicioController"
	});
	$routeProvider.when("/fim", {
		templateUrl: "js/modules/fim/fim.html",
		controller: "fimController"
	});
	$routeProvider.otherwise({redirectTo: "inicio"});
}]);