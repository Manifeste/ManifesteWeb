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
		var OcorrenciasController = function( OcorrenciasService, $scope ){
			$scope.tabs = {
				currentTab: 1,
				changeTab: function( tabNumber ){
					$scope.tabs.currentTab = tabNumber;
				}
			};

			$scope.ocorrencias = OcorrenciasService.queryMine();
		};

		return ['OcorrenciasService', '$scope', OcorrenciasController]
	}
);