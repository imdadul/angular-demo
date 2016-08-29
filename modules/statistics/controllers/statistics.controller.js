(function () {
	'use strict';

	angular.module('statistics.controllers')
	.controller('StatisticsController', StatisticsController);

	StatisticsController.$inject = ['$scope', 'statisticsService'];

	function StatisticsController($scope, statisticsService) {
		
		$scope.barModes = [
		{name:'Fruits'},
		{name:'Price'},
		{name:'Color'}
		];

    	$scope.bars = []; // name, height,

    	$scope.selectedMode = $scope.barModes[0];

    	statisticsService.getFruits().then(function(data,err){
    		$scope.fruits = data;
    		$scope.updateBars();
    	})

    	var getBarsByCollection = function(collection){
    		// This function generates a bar array[...,{name,height,count},..]
    		// which is rendered at the view.
    		var max=0;
    		var bars = [];
    		angular.forEach(collection, function(c){
    			if(c.count>max){
    				max = c.count
    			}
    		});

    		angular.forEach(collection,function(c){
    			bars.push({
    				name: c.name, height:c.count/max*100, count:c.count
    			})
    		})

    		return (bars);
    	};

    	$scope.updateBars = function(){
    		// This fuctions includes the custom logic to create grouped array 
    		// (summarizedArray)[...,{name,count},..]. We pass this summarizedArray to
    		//  getBarsByCollection to generate bar array.
    		$scope.bars=[];
    		if($scope.selectedMode.name=='Fruits'){
    			$scope.bars = getBarsByCollection($scope.fruits);
    		}
    		else if($scope.selectedMode.name=='Price'){  	
    			var upperThenTenCount = 0;
    			var lowerThenTenCount = 0;
    			angular.forEach($scope.fruits, function(f){
    				if(f.price>=10)  upperThenTenCount++;
    				else lowerThenTenCount++;
    			})
    			var summarizedArray = [
    			{name:'Less then 10€', count :lowerThenTenCount},
    			{name:'More then 10€', count :upperThenTenCount}
    			]
    			$scope.bars = getBarsByCollection(summarizedArray);
    		}
    		else if($scope.selectedMode.name=='Color'){  

    			var summarizedArray = []; // {color:'',count:''}

    			var putTosummarizedArray  = function(f){
    				var isNewColor = true;
    				for(var i=0; i<summarizedArray.length; i++){
    					if(summarizedArray[i].name==f.color){
    						summarizedArray[i].count++;
    						isNewColor = false;
    						break;
    					}    					
    				}
    				if(isNewColor) summarizedArray.push({name:f.color, count:1});

    			}
    			angular.forEach($scope.fruits, function(f){
    				putTosummarizedArray(f);
    			})
    			
    			$scope.bars = getBarsByCollection(summarizedArray);
    		}
    	}


    }

    

})();