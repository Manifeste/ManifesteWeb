'use strict'

define(
	[
		'auth/delegate/AuthService',
		'auth/controllers/LoginController',
		'auth/controllers/SessionController',
		'auth/AuthEvents'
	],
	function( AuthService, LoginController, SessionController, AuthEvents ) {
		
		var moduleName = 'manifeste.Auth';

		angular
			.module( moduleName, [ 'ngCookies' ] )
			.factory( 'AuthService', AuthService )
			.controller( 'LoginController', LoginController )
			.controller( 'SessionController', SessionController )
			.constant('AuthEvents', AuthEvents);

		return moduleName;
	}
);