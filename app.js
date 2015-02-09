(function(){

	head.load(
			[
				'./assets/lib/angular.js',
				'./assets/lib/angular-route.js',
				'./assets/lib/angular-resource.js',
				'./assets/lib/angular-cookies.js',
				'./assets/lib/angular-ui.js',

				'./assets/lib/jquery.js',
				'./assets/lib/bootstrap.js',
				
				'./assets/lib/require.js'
			],
			function(){
				require.config (
					{
						baseUrl : './assets/src',
						paths   :
						{
							'ocorrencias'   : 'ocorrencias',
							'auth': 'auth',
							'config'        : 'config'
						}
					}
				);
			
				require( [ 'main' ], function(  ){
					// Adiciona "ng-app" a <html>
					angular.element(document).ready(function() {
				      angular.bootstrap(document, ['Manifeste']);
				    });
				});
			}
		);
})();