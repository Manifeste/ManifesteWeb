'use strict'

var Manifeste = angular.module('Manifeste', ['ngRoute', 'ngResource']);

Manifeste.config(function($routeProvider){
	$routeProvider.
		when('/main', {
			templateUrl: 'views/main.html',
		}).
		when('/busca', {
			templateUrl: 'views/busca.html'
		}).
		when('/config', {
			templateUrl: 'views/config.html'
		});
});

Manifeste.controller('user', function($scope){
	$scope.username = "Daniel Bastos";
});

Manifeste.controller('ocorrencias/index', ['Ocorrencias', '$scope', 
	function(Ocorrencias, $scope){
		$scope.model = Ocorrencias.query();
	}
]);

Manifeste.controller('ocorrencias/detalhes', ['Ocorrencias', '$routeParams','$scope', 
	function(Ocorrencias, $routeParams, $scope){
		$scope.ocorrencia = Ocorrencias.get({ocorID: $routeParams.ocorID});

		$scope.encerrar = function(){
			$scope.ocorrencia.$encerrar();
		}
	}
]);