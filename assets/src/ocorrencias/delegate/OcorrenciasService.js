'use strict'

define(
	[
		'config'
	],
	function( config ) {
		
		/**
		 * Essa função constrói um Resource que busca ocorrências na API dada
		 */
		var RESTConsumer = function( $resource ){
			return $resource( config.apiDomain + '/ocorrencias/:ocorID', { ocorID: '@ocorID' },
			{
				'atualizarDescricao': {
					method: 'PATCH'
				},
				'encerrar': {
					method: 'POST',
					url: config.apiDomain + '/ocorrencias/:ocorID/encerrado'
				},
				'reabrir': {
					method: 'DELETE',
					url: config.apiDomain + '/ocorrencias/:ocorID/encerrado'
				},
				interesse: {
					method: 'POST',
					url: config.apiDomain + '/ocorrencias/:ocorID/interesse'	
				},
				'queryMine': {
					method: 'GET',
					url: config.apiDomain + '/ocorrencias/me?filter=id,titulo,descricao',
					isArray: true
				},
				'comentar': {
					method: 'POST',
					params: {
						ocorID: '@ocorID'
					},
					url: config.apiDomain + '/ocorrencias/:ocorID/comentarios'
				},
				'getComentarios': {
					method: 'GET',
					url: config.apiDomain + '/ocorrencias/:ocorID?filter=comentarios'
				}
			});
		};
		
		/*
		 * Assinatura de instalação Angular
		 * 
		 * @requires ngResource
		 * @defines RESTConsumer
		 */
		return [ "$resource", RESTConsumer ];
	}
);