/**
* Created with manifesteWeb.
* User: danielbastos
* Date: 2015-01-20
* Time: 07:37 PM
* To change this template use Tools | Templates.
*/
define(
	[ ],
	function( ) {
		/**
		 * Constrói o gerenciador de rotas
		 */
		var RouteManager = function( $routeProvider ){
			$routeProvider
				.when('/main', {
					templateUrl: 'assets/views/main.html'
				})
				.when('/minhas', {
					templateUrl: 'assets/views/minhas.html',
					controller: 'MinhasOcorrenciasController'
				})
				.when('/ocorrencias/:ocorID', {
					templateUrl: 'assets/views/detalhes.html',
					controller: 'DetalhesController'
				})
				.when('/login', {
					templateUrl: 'assets/views/login.html',
					controller: 'LoginController'
				})
				.when('/config', {
					templateUrl: 'views/config.html'
				})
				.otherwise({
					templateUrl: 'assets/views/main.html'
				});
		}

		return ['$routeProvider', RouteManager];
		
	}
);