// Serviço de Rotas

Manifeste.config(['$routeProvider', function(Router) {
	Router.
		when('/ocorrencias', {
			templateUrl: 'views/ocorrencias.html',
			controller: 'ocorrencias/index'
		}).
		when('/ocorrencias/:ocorID', {
			templateUrl: 'views/detalhes.html',
			controller: 'ocorrencias/detalhes'
		});
}])

// Acesso à API
Manifeste.factory('Ocorrencias', function($resource){
	return $resource('http://localhost:4000/ocorrencias/:ocorID', {},
		{
			'atualizarDescricao': {
				method: 'PATCH'
			},
			'encerrar': {
				method: 'POST',
				url: 'http://localhost:4000/ocorrencias/:ocorID/encerrado'
			},
			'reabrir': {
				method: 'POST',
				url: 'http://localhost:4000/ocorrencias/:ocorID/encerrado'
			},
			'query': {
				method: 'GET',
				url: 'http://localhost:4000/ocorrencias/me?filter=id,titulo,descricao',
				isArray: true
			}
		});
});