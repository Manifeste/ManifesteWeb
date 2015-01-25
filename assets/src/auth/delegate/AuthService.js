'use strict'

define(
	[
		'config'
	],
	function( config ) {
		
		var AuthService = function( $http, $rootScope, AuthEvents, $cookieStore ){
			return {
				login: function( credentials ){
					return $http
								.post( config.apiDomain + '/auth/login', credentials)
								.success( function(){
									$rootScope.$broadcast(AuthEvents.loginSuccess);
									$cookieStore.put('authStatus', true);
								})
								.error( function(){
									$rootScope.$broadcast(AuthEvents.loginFailed);
									$cookieStore.put('authStatus', false);
								});
				},
				logoff: function(){
					return $http
								.post( config.apiDomain + '/auth/logoff' )
								.success( function(){
									$rootScope.$broadcast(AuthEvents.logoffSuccess);
									$cookieStore.put('authStatus', false);
								});				
				},
				signup: function( credentials ){
					return $http
								.post( config.apiDomain + '/auth/signup', credentials )
								.success( function(){
									$rootScope.$broadcast(AuthEvents.loginSuccess);
									$cookieStore.put('authStatus', true);
								})
								.error( function(){
									$rootScope.$broadcast(AuthEvents.loginFailed);
									$cookieStore.put('authStatus', false);
								});
				}
			};
		};

		return ['$http', '$rootScope', 'AuthEvents', '$cookieStore', AuthService];
	}
);