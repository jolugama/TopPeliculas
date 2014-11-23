'use strict';
angular.module('myApp')
.value('version', '0.1')
//es la clave que nos pide la api de la web.
.constant('API_KEY','x7aqe2w96k8dkgar9t7vec72')  

//$http y API_KEY son DI (dependency inyection) y se pasan como parámetros
.factory('miFactoria', ['$http','API_KEY',function($http,API_KEY) {  
    var paises = [
    {name: 'USA',code: 'us'}, 
    {name: 'UK',code: 'uk'}, 
    {name: 'Australia',code: 'au'},
    {name: 'España',code: 'es'},
    {name: 'Francia',code: 'fr'}
    ];
    var listas = [
    {name: 'DVD - Próximos', code: 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/upcoming.json?'},
    {name: 'DVD - Estrenos', code: 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/new_releases.json?'},
    {name: 'DVD - Actuales', code: 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json?'},
    {name: 'Top alquileres', code: 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?'},
    {name: 'En cines', code: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?'}
    ];
    return {
        getPaises: function() {
            return paises;
        },
        getListas: function() {
            return listas;
        },
        getPeliculas:function(codigoPais, url){
            //metodo jsonp en lugar de get, que indicamos que queremos un archivo json y con unos parámetros dados
            //ejemplo de envio jsonp: https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero
            return $http.jsonp(url+ 'page_limit=50&country='+ codigoPais+'&callback=JSON_CALLBACK&apikey='+API_KEY);
            
            
        }

    }
}])