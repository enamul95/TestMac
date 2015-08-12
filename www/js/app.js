// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('signin', {
          url: "/signin",
          templateUrl: "signin.html",
          controller: 'SignInCtrl'
        })
    
      
    
    
    $urlRouterProvider.otherwise("/signin");
})

.controller('SignInCtrl', function($scope, $state, $http, $rootScope, $ionicLoading, $timeout,$ionicPopup) {
$scope.doSubmit = function(){
$ionicLoading.show({
							template: 'Please Wait..'
						});
						$http({
							  method: 'POST',							 
							  url:  'http://202.40.190.14:8084/testMac/TestServeetSv',
							   params: {name:"Enamul Haque"},
							 // params: {cusCode:cusCode},
							  //type:'JSON',
							  headers : { 'Content-Type': 'application/json' }
							}).success(function(data, status, headers, config) {
								 $ionicLoading.hide();
									$ionicPopup.alert({
								 title:'Success',
										  //template:'From date'
								})
								//alert($rootScope.responseArr.toString);
							}).error(function(data, status, headers, config) {
								 $ionicLoading.hide();
								$ionicPopup.alert({
								 title:'Data :'+data+'status :'+status+'headers :'+headers+'config :'+config,
										  //template:'From date'
								})
							}); 
}

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
