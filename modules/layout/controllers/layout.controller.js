(function(){
	angular.module('layout.controllers', [])
	.controller('LayoutController',LayoutController);

	LayoutController.$inject = ['$scope','ROUTE_INFO','$state','$location']
	function LayoutController($scope,ROUTE_INFO,$state,$location){

		$scope.ROUTE_INFO = ROUTE_INFO;
		$scope.isActive = function (item) {
			if ($location.path().indexOf(item) != -1) {
				return true;
			}
			return false;
		};
	}
})();