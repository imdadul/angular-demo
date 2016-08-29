(function () {
    'use strict';
    angular.module('statistics.services', [])
        .factory('statisticsService', StatisticsService);

    StatisticsService.$inject = ['$http','$q','mockData'];
    
    function StatisticsService($http,$q,mockData) {

    function getFruits() {
      var deferred = $q.defer();

      setTimeout(function() {
        deferred.resolve(mockData.getFruits());
      }, 10);

      return deferred.promise;
    }

    return {
      getFruits:getFruits
    }
  }

})
();