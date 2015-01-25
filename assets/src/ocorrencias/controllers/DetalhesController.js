define(
	[
		
	],
	function() {
		/*
		 * Define um módulo de detalhamento de Ocorrências
		 */ 
		
		var DetalhesController = function( OcorrenciasService, $routeParams, $scope ){
			$scope.ocorrencia = OcorrenciasService.get({ocorID: $routeParams.ocorID});

			$scope.comentar = function( comentario ){
				OcorrenciasService.comentar( {ocorID: $routeParams.ocorID }, { 
					'comentario': comentario
				} );
			}
		};
		
		return ['OcorrenciasService', '$routeParams', '$scope', DetalhesController];
	}
);