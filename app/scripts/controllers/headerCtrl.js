'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:headerCtrl
 * @description
 * # headerCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('headerCtrl', function($scope, $location,searchService) {
        $scope.showMainMenuContent = false;
        $scope.getClass = function(path) {
            if ($location.path().substr(0, path.length) === path) {
                return 'active-menu-item';
            } else {
                return '';
            }
        };
        $scope.header={searchItems:[],showLoader:false,searchTempItems:[],searchText:""};
        
        // search Results Object

        $scope.fnGetSearchJSON=function(){
            searchService.getSearchResults('data/searchResults.json').then(function(result){
                if(!result.error){
                    $scope.header.searchTempItems = result.data;
                }
              });
        };
        /*Funtion to get Search Results*/
        $scope.fnGetSearchResults=function(){
            $scope.header.searchItems=[];
            $scope.header.showLoader=true;
            for (var i = 0; i < $scope.header.searchTempItems.length; i++) {
                if($scope.header.searchTempItems[i].info.indexOf($scope.header.searchText)>-1){
                    $scope.header.searchItems.push($scope.header.searchTempItems[i]);
                }
            }
            $scope.header.showLoader=false;
        };
        
        $scope.fnGetSearchJSON();

        $scope.mainItems = [{
            'content': 'It is a series of super bails and super acquittals. First film star Salman Khan then political stalwart Jaya Lalitha and today business tycoon Ramalinga  Raju getting their biggest judicial relief of life.',
            'img': 'images/image1.jpg'
        }, {
            'content': 'We would not comment on these decisions of respective High Courts but will tell you another story. The story is not about granting bail to any VIP but about a Chief Justice of a High Court.',
            'img': 'images/image1.jpg'
        }, {
            'content': 'But first a quick recap. It’s an open secret that Dhirubhai Ambani’s Reliance Industries was born out of a string of legal hassles.',
            'img': 'images/image1.jpg'
        }, {
            'content': 'From stock market rigging to smuggling of factory machines, Reliance fought pitched battles with investigative agencies in Mumbai courts and won each of the case one by one.',
            'img': 'images/image1.jpg'
        }];


        $(window).scroll(function() {
            var a = 112;
            var pos = $(window).scrollTop();
            if (pos > a) {
                $("header").css({
                    position: 'fixed'
                });
            } else {
                $('header').css({
                    position: 'absolute',
                    top: '100px'
                });
            }
        });





    });
