/**
* Created with manifesteWeb.
* User: danielbastos
* Date: 2015-01-21
* Time: 01:19 PM
* To change this template use Tools | Templates.
*/
define(
	[
		'ocorrencias/OcorrenciasModule',
		'auth/AuthModule',
		'RouteManager',
		'config'
	],
	function( OcorrenciasModule, AuthModule, RouteManager, config ) {
		var appName = 'Manifeste';

		var Manifeste = angular
							.module( appName, [ 
												'ngRoute', 'ui.bootstrap',
												 AuthModule, OcorrenciasModule 
											  ])
							.config( RouteManager )
							.config( config.credentialsConfig );
	}
);