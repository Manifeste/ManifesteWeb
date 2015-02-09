define(
	function(){
		var providerConf = function( $httpProvider ){
			$httpProvider.defaults.withCredentials = true;
		};


		return {
			apiDomain: 'http://localhost:4000',
			credentialsConfig: ['$httpProvider', providerConf]
		};
});