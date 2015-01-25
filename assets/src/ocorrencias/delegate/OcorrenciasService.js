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
			return $resource( config.apiDomain + '/ocorrencias/:ocorID', {},
			{
				'atualizarDescricao': {
					method: 'PATCH'
				},
				'encerrar': {
					method: 'POST',
					url: config.apiDomain + '/ocorrencias/:ocorID/encerrado'
				},
				'reabrir': {
					method: 'POST',
					url: config.apiDomain + '/ocorrencias/:ocorID/encerrado'
				},
				'queryMine': {
					method: 'GET',
					url: config.apiDomain + '/ocorrencias/me?filter=id,titulo,descricao',
					isArray: true
				},
				'comentar': {
					method: 'POST',
					url: config.apiDomain + '/ocorrencias/:ocorID/comentarios'
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