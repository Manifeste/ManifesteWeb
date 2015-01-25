define(
	[
		'ocorrencias/delegate/OcorrenciasService',
		'ocorrencias/controllers/DetalhesController',
		'ocorrencias/controllers/MinhasOcorrenciasController'

	],
	function( OcorrenciasService, DetalhesController, MinhasOcorrenciasController ) {
		var moduleName = 'manifeste.Ocorrencias';
		
		angular
			.module ( 	  moduleName, 			[ 'ngResource' ]	 )
			.factory( 	 'OcorrenciasService', OcorrenciasService 		 )
			.controller( 'DetalhesController',	DetalhesController 	 )
			.controller( 'MinhasOcorrenciasController', MinhasOcorrenciasController );
		
		return moduleName;
	}
);