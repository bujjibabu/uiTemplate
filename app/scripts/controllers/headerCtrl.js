'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:headerCtrl
 * @description
 * # headerCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('headerCtrl', function ($scope,$location) {
	  $scope.getClass = function(path) {
	    if ($location.path().substr(0, path.length) == path) {
	      return "active-menu-item"
	    } else {
	      return ""
	    }
	}
  });
