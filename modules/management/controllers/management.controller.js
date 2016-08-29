(function () {
	'use strict';

	angular.module('management.controllers')
	.controller('ManagementController', ManagementController)

	ManagementController.$inject = ['$scope','managemntService'];

	function ManagementController ($scope,managemntService) {
		$scope.fruits = [];
		var originalData ;
		
		managemntService.getFruits().then(function(data,err){
			originalData = data;
			$scope.fruits = angular.copy(originalData);
		})

		$scope.update = function (){
			managemntService.updateFruits($scope.fruits).then(function(data,err){
				originalData = data;
				$scope.fruits = angular.copy(originalData);
				alert('Successfull');
			})
		}
		$scope.cancel = function (){
			$scope.fruits = angular.copy(originalData);
		}
	}

})();