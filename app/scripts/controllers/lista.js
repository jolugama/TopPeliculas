'use strict';

angular.module('myApp')
.controller('ListaCtrl', ['$scope', 'miFactoria', function($scope, miFactoria) {
	$scope.paises = miFactoria.getPaises();
	$scope.listas = miFactoria.getListas();

	/**
	 * Según el codigo pais seleccionado...
	 * @param  {[type]} codigoPais [description]
	 * @return {[type]}            [description]
	 */
	 $scope.cargaPeliculas = function(codigoPais,url,opcionesScore) {

	 	if(url===undefined){
	 		url=$scope.listas[0].code;
	 	}
	 	if(opcionesScore===undefined){
	 		opcionesScore=$scope.opcionesScore;
	 	}
		//con el método "then" encadenamos la "promesa" (promise). 2 callback. acierto y fallo
		// https://docs.angularjs.org/api/ng/service/$q
		miFactoria.getPeliculas(codigoPais,url).then(
		//callback en caso de exito
		function(response) {
			var peliculaArray = response.data.movies;
			var ratings;
			console.log(JSON.stringify(response.data.movies))
			$scope.peliculas= peliculaArray;

			$scope.total=response.data.total;
			if(opcionesScore==='critics'){
				//alert('critics')
				ratings='ratings.critics_score'
			}else if (opcionesScore==='audience'){
				//alert('audience')
				ratings='ratings.audience_score'
			}
			$scope.filtro=ratings

		},
			//callback en caso fallido
			function(response) {
				// error message
				console.log("error en la promesa getPeliculas")
			});
	};

	//selecciono en las select una por defecto
	$scope.listaView=$scope.listas[1];
	$scope.paisView=$scope.paises[0];
	$scope.opcionesScore="critics";

	//cargo la funcion con un parámetro por defecto
	$scope.cargaPeliculas('us',$scope.listaView.code);


}
])






