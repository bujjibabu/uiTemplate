
'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('DetailsCtrl', function ($scope) {
    $scope.details = "detals page 12345";
    $scope.detailsObj = {
    	title : "India Rank’s 3rd In World’s Prospective Top Investment Destinations",
    	image:"../images/detail.jpg",
    	text:'The United Nations Conference on Trade & Development (UNCTAD) released its 25th annual World Investment Report last week. In the report, India was placed 9th in the list of investment-friendly countries, with a 22% increase in Foreign Direct Investment (FDI).\nThe list aims to “inform global debates on the future of the international policy environment for cross-border investment”. According to the UNCTAD international investment has decreased in the past few years due to global economic problems and political tensions. Global FDI fell by 16% in the last year.\nIndia finally broke the top 10, being ranked at 9. India received $34 billion in the last year, 80% of what South Asia received. UNCTAD predicted that India’s ranking may rise to 3 in 2015-2017. However, India is the only BRIC nation to not yet cross the $50 billion mark.\nChina topped the list for FDI inflows, having received $129 billion. Russia dropped out of the top 10 due to the economic sanctions imposed on it by the international community over its involvement in the Ukraine crisis.\nConversely, if you consider FDI outflows, India dropped out of the top 20 this year. In the list of outward FDI flow, the US topped the list, while China was 3rd.\nThis news comes at a welcome time when hopes on India’s economy have been rekindled, and markets are on a surge. We hope the momentum continues to rise and give impetus to India’s economy.\n'
    }
  });
