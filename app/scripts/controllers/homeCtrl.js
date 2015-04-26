'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('HomeCtrl', function ($scope,$http) {
    $scope.myInterval = 2000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 600 + slides.length + 1;
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/300',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }

	  //get thumbnail data

	  $http.get('data/homethumbnails.json').
	    success(function(data, status, headers, config) {
	      $scope.thumbnailsData = data;
	    }).
	    error(function(data, status, headers, config) {
	      console.log('unable to get data');
	    });

// Most recent
	     $http.get('data/mostRecent.json').
	    success(function(data, status, headers, config) {
	      $scope.mostRecent = data;
	    }).
	    error(function(data, status, headers, config) {
	      console.log('unable to get data');
	    });

  });
