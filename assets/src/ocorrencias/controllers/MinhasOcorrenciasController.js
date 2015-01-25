/**
* Created with manifesteWeb.
* User: danielbastos
* Date: 2015-01-20
* Time: 07:32 PM
* To change this template use Tools | Templates.
*/
define(
	[
		
	],
	function() {
		var MinhasOcorrenciasController = function( OcorrenciasService, $scope ){
			$scope.ocorrencias = OcorrenciasService.queryMine();
		};

		return ['OcorrenciasService', '$scope', MinhasOcorrenciasController]
	}
);