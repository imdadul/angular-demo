(function () {
  'use strict';
  angular.module('management.services')
  .factory('managemntService', ManagemntService);

  ManagemntService.$inject = ['$http','$q','mockData'];

  function ManagemntService($http,$q,mockData) {

    function getFruits() {
      var deferred = $q.defer();

      setTimeout(function() {
        deferred.resolve(mockData.getFruits());
      }, 10);

      return deferred.promise;
    }

    function updateFruits(data) {
      var deferred = $q.defer();

      setTimeout(function() {
        deferred.resolve(mockData.updateFruits(data));
      }, 10);

      return deferred.promise;
    }

    return {
      getFruits:getFruits,
      updateFruits:updateFruits
    }
  }

})();