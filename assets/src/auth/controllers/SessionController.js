'use strict'

define(
	[
		
	],
	function(  ) {
		var SessionController = function( AuthEvents, AuthService, $cookieStore, $rootScope, $scope ){
			$scope.model = {
				isAuthorized: !!$cookieStore.get('authStatus'),
				
				sair: function(){
					AuthService.logoff();
				}
			};

			$rootScope.$on(AuthEvents.loginSuccess, function(){
				$scope.model.isAuthorized = true;
			});

			$rootScope.$on(AuthEvents.logoffSuccess, function(){
				$scope.model.isAuthorized = false;
			})
		}

		return ['AuthEvents', 'AuthService', '$cookieStore', '$rootScope','$scope', SessionController];
	}
);