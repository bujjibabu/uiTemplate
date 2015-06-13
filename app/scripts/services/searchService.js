'use strict';
angular.module('testApp').service('searchService', function ($http, $q ) {
  var search = function (data) {
    angular.extend(this, data);
  };
  search.data = {
    listObj:[]
  };
  search.getSearchResults = function(url){
    var deferred = $q.defer();
    $http.get(url).success(function(response){
      try{
        var searchResponse = angular.copy(response.results.data);
        _.map(searchResponse, function (object) {
          search.data.listObj.push(object);
        });
        deferred.resolve({'data':angular.copy(search.data.listObj),'message':''});
      }catch(e){
        deferred.resolve({'error': 'ok', 'message': 'Failed to get List'});
      }
    }).error(function(){
      deferred.resolve({'error': 'ok', 'message': 'Failed to get Data'});
    });
    return deferred.promise;
  };
  return search;
});
