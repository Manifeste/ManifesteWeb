define(
	[
		
	],
	function() {
		/*
		 * Define um módulo de detalhamento de Ocorrências
		 */ 
		
		var DetalhesController = function( OcorrenciasService, $routeParams, $modal, $scope ){
			var ocorrencia = new OcorrenciasService({
				ocorID: $routeParams.ocorID
			});

			// Carrega a Ocorrencia no escopo
			ocorrencia
					.$get()
					.then(function ( instance ) {
						$scope.ocorrencia = instance;
					});

			// Model
			$scope.modals = {
				open: function(){
					$modal.open({
						size: 'lg'
					});
				}
			}

			// Callbacks

			$scope.reactions = {
				updateComment: function ( instance ) {
					$scope.ocorrencia.comentarios = instance.comentarios;
					$scope.comentario = '';
				},
				encerrar: function(){
					$scope.ocorrencia.encerrado = true;
				},
				reabrir: function(){
					$scope.ocorrencia.encerrado = false;
				}
			};

			// Métodos

			$scope.encerrar = function(){
				OcorrenciasService.encerrar( {
					ocorID: $routeParams.ocorID
				}, $scope.reactions.encerrar );
			};
			
			$scope.reabrir = function(){
				OcorrenciasService.reabrir( {
					ocorID: $routeParams.ocorID
				}, $scope.reactions.reabrir );
			};

			$scope.comentar = function( comentario ){
				OcorrenciasService.comentar( {ocorID: $routeParams.ocorID }, { 
					'comentario': comentario
				}, function(){
					var promise = 
							OcorrenciasService
								.getComentarios( {ocorID: $routeParams.ocorID } )
								.$promise;
					
					promise.then( $scope.reactions.updateComment );
				});
			};
		};
		
		return ['OcorrenciasService', '$routeParams', '$modal', '$scope', DetalhesController];
	}
);