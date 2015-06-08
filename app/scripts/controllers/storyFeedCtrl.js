'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:storyFeedCtrl
 * @description
 * # storyFeedCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('storyFeedCtrl', function ($scope, $http) {

  	 $http.get('data/mystory.json').
	    success(function(data/*, status, headers, config*/) {
	      $scope.storyFeed  = data;

	      var x = 12;
	      var y = 34;
	      var z = x+y;

	      if(z>100){
	      	alert('success')
	      }else{
	      	alert('fail');
	      }

	    }).
	    error(function(/*data, status, headers, config*/) {
	      console.log('unable to get data');
	    });
    
  });
