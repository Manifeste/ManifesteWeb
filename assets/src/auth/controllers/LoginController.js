define(
	[
		
	],
	function(){
		var LoginController = function( AuthService, $scope ){
			$scope.credentials = {
				email: '',
				senha: ''
			};

			$scope.login = function( credentials ){
				AuthService.login( credentials );
			};
		}

		return ['AuthService', '$scope', LoginController];
	}
);