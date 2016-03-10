'use strict';

var roomApp = angular.module('roomApp');

//detail controller utilities table
// roomApp.controller('list_DetailutilitiesCtrl', ['$scope', 'RoomServices', 'detail_room_utilitiesProvider',
// 	function($scope, RoomServices, detail_room_utilitiesProvider){
// 		$scope.detailsutilities = RoomServices.getRooms();

// 		$scope.reset = function(){
// 			$scope.newRoom = angular.copy({});
// 			$scope.show = false;
// 		};
// }]);

//detail controller relax table
// roomApp.controller('list_DetailrelaxCtrl', ['$scope', 'RoomServices', 'detail_room_relaxProvider',
// 	function($scope, RoomServices, detail_room_relaxProvider){
// 		$scope.detailsrelax = RoomServices.getRooms();

// 		$scope.reset = function(){
// 			$scope.newRoom = angular.copy({});
// 			$scope.show = false;
// 		};
// }]);

roomApp.controller('RoomController', ['$scope', '$stateParams', function($scope, $stateParams) {
	console.log($stateParams.productId);
}]);