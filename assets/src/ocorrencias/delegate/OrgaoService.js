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
			return $resource( config.apiDomain + '/orgao/' );
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