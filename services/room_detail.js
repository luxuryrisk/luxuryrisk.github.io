'use strict';

var roomApp = angular.module('roomApp');

roomApp.service('RoomServices', function() {
  var roomData = [
  {//Normal
  	//Utilities
  	id: 'normal',
    bed: 'Twin bed',
    fridge: 'Fridge',
    color_television: 'Normal',
    air_conditionr: 'Air-conditioner',
    shower_tub: 'Shower tub',
    seating_furniture: 'Small',
    //Relax
    pool: 'Free',
    sauna: 'Off 20%',
    tennis: 'Free',
    karaoke: 'Off 20%',
    mini_golf: 'Off 20%',
    gym: 'Free',
  },

  {//Deluxe
  	//Utilities
  	id: 'deluxe',
    bed: 'Big twin bed',
    fridge: 'Fridge',
    color_television: 'Large',
    air_conditionr: 'Air-conditioner',
    shower_tub: 'Shower tub',
    seating_furniture: 'Normal',
    //Relax
    pool: 'Free',
    sauna: 'Off 40%',
    tennis: 'Free',
    karaoke: 'Off 40%',
    mini_golf: 'Off 40%',
    gym: 'Free',
  },

  {//Double Deluxe
  	//Utilities
  	id: 'double_deluxe'
    bed: 'Double big twin bed',
    fridge: 'Fridge',
    color_television: 'Large',
    air_conditionr: 'Air-conditioner',
    shower_tub: 'Shower tub',
    seating_furniture: 'Normal',
    //Relax
    pool: 'Free',
    sauna: 'Off 40%',
    tennis: 'Free',
    karaoke: 'Off 40%',
    mini_golf: 'Off 40%',
    gym: 'Free',
  },

  {//Super Deluxe
  	//Utilities
  	id: 'super_deluxe'
    bed: 'Big twin bed',
    fridge: 'Fridge',
    color_television: 'Large',
    air_conditionr: 'Air-conditioner',
    shower_tub: 'Bathtub & Shower tub',
    seating_furniture: 'Large',
    //Relax
    pool: 'Free',
    sauna: 'Off 60%',
    tennis: 'Free',
    karaoke: 'Off 60%',
    mini_golf: 'Off 60%',
    gym: 'Free',
  },

  {//Super Double Deluxe
  	//Utilities
  	id: 'super_double_deluxe'
    bed: 'Big double twin bed',
    fridge: 'Fridge',
    color_television: 'Large & Long',
    air_conditionr: 'Air-conditioner',
    shower_tub: 'Bathtub & Shower tub',
    seating_furniture: 'Large',
    //Relax
    pool: 'Free',
    sauna: 'Off 60%',
    tennis: 'Free',
    karaoke: 'Off 60%',
    mini_golf: 'Off 60%',
    gym: 'Free',
  },

  {//Vip
  	//Utilities
  	id: 'vip'
    bed: 'Big double twin bed',
    fridge: 'Large fridge',
    color_television: 'Extra',
    air_conditionr: 'Air-conditioner',
    shower_tub: 'Bathroom',
    seating_furniture: 'Living room',
    //Relax
    pool: 'Free',
    sauna: 'Off 80%',
    tennis: 'Free',
    karaoke: 'Off 80%',
    mini_golf: 'Off 80%',
    gym: 'Free',
  },
  ];

  this.getRooms = function(){
  	return roomData;
  };
});

//utilities table
roomApp.directive('detail_room_utilitiesDirective', [function () {
	return {
		restrict: 'AE',
		templateUrl: 'detail_room_utilities_table.html',
		roomutilitie: '=data'
	};
}]);

roomApp.provider('detail_room_utilitiesProvider', [function(){
	var defautlitem = true;

	this.disableDefault = function(){
		defautlitem = false;
	};

	this.$get = [function(){
		return new FunctionProvider(detailu);
	}];

	function FunctionProvider(roomutilitie){
		this.addRoom = function(detailu, getRooms){
			if(defautlitem){
				roomutilitie.detailu = roomutilities;
			};
			getRooms.push(roomutilitie);
		};
	};
}]);


//relax table
roomApp.directive('detail_room_relaxDirective', [function () {
	return {
		restrict: 'AE',
		templateUrl: 'detail_room_relax_table.html',
		roomrelax: '=data'
	};
}]);

roomApp.provider('detail_room_relaxProvider', [function(){
	var defautlitem = true;

	this.disableDefault = function(){
		defautlitem = false;
	};

	this.$get = [function(){
		return new FunctionProvider(detailr);
	}];

	function FunctionProvider(roomrelax){
		this.addRoom = function(detailr, getRooms){
			if(defautlitem){
				roomrelax.detailr = roomrelax;
			};
			getRooms.push(roomrelax);
		};
	};
}]);