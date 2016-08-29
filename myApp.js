var app = angular.module("myApp", ["ngAnimate","ngRoute"])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/one',{
			templateUrl : 'one.html'
		})
		.when('/two',{
			templateUrl : 'two.html'
		})
		.when('/four',{
			templateUrl : 'four.html'
		})		
		.otherwise({
			redirectTo : '/one'
		});
}]);

app.controller("myCtrl", function($scope) {
	$scope.firstName = "Dido";
    $scope.lastName = "DTG";
	$scope.year = "2016";
	$scope.last = $scope.firstName + " " + $scope.lastName + " " +$scope.year;
	
	$scope.names=
	[
		{fname: "dido",
		 lname: "dddd",
		 age: 15,
		 url:"img.jpg"
		},
		{
		 fname: "rosi",
		 lname: "rrrr",
		 age: 25,
		 url:"img2.jpg"
		},
		{fname: "viki",
		 lname: "vvvv",
		 age:18,
		 url:"img2.jpg"
		},
		{
		 fname: "asen",
		 lname: "aaaa",
		 age: 20,
		 url:"img.jpg"
		},
				{
		 fname: "ivan",
		 lname: "iiii",
		 age: 20,
		 url:"img2.jpg"
		},		{
		 fname: "petar",
		 lname: "pppp",
		 age: 32,
		 url:"img2.jpg"
		},		{
		 fname: "asq",
		 lname: "aaaa",
		 age: 18,
		 url:"img.jpg"
		}
		
	];
});