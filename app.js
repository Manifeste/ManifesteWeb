(function(){

	head.load(
			[
				'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.8/angular.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.8/angular-route.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.8/angular-resource.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.8/angular-cookies.js',
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