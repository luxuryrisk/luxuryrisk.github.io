'use strict';

var roomApp = angular.module('roomApp', [
	'ui.router'
]);


roomApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/room'); // Mọi đường dẫn không hợp lệ đều được chuyển đến state home
    
    $stateProvider
       
        .state('home', {    // Định ngĩa 1 state home
            url: '/home',  // khai báo Url hiển thị
            templateUrl: 'home.html',  // đường dẫn view
            //controller: function($scope) {  // Khai báo 1 controller cho state home
            //        $scope.id= ['normal', 'deluxe', 'double_deluxe', 'super_deluxe', 'super_double_deluxe', 'vip'];
            //    }
        })

        .state('product',{
            url: '/room/', //{productId}',  // để rỗng mặc định khi view home được load sẽ gọi tới template main đầu tiên
            templateUrl: 'product.html',  // đường dẫn tới template main
            controler: 'RoomController'
            //controller: 'MainCtrl' // gọi xử lý controller khi state được gọi
        })

        .state('service',{
            url: '/service',  // để rỗng mặc định khi view home được load sẽ gọi tới template main đầu tiên
            templateUrl: 'service.html',  // đường dẫn tới template main
            //controller: 'MainCtrl' // gọi xử lý controller khi state được gọi
        })

        .state('aboutus',{
            url: '/aboutus',  // để rỗng mặc định khi view home được load sẽ gọi tới template main đầu tiên
            templateUrl: 'aboutus.html',  // đường dẫn tới template main
            //controller: 'MainCtrl' // gọi xử lý controller khi state được gọi
        })

        .state('contactus',{
            url: '/contactus',  // để rỗng mặc định khi view home được load sẽ gọi tới template main đầu tiên
            templateUrl: 'contactus.html',  // đường dẫn tới template main
            //controller: 'MainCtrl' // gọi xử lý controller khi state được gọi
        })

  		.state('room_detail',{
            url: '/rooms/detail/:id',  // khai báo tham số ID trên url
            templateUrl: 'room.html',  // đường dẫn tới template detail
            //controller: 'DetailCtrl' // gọi xử lý controller khi state được gọi
        })
});