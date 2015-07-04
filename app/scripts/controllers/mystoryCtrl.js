'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MystoryCtrl
 * @description
 * # MystoryCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('MystoryCtrl', function($scope,$http,$location) {

       $http.get('data/mystory.json').
	    success(function(data/*, status, headers, config*/) {
	      $scope.mystoryData = data;
	    }).
	    error(function(/*data, status, headers, config*/) {
	      console.log('unable to get data');
	    });

	    $scope.fnDeatils = function(){
	   		$location.path('/details')
	  	 }
	    //pagination

    });
