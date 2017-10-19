angular.module('client-book').controller('BookController', function($scope, $http) {
	$scope.book = {};

	$scope.submit = function() {
		$http({
		  method: 'POST',
		  url: 'http://localhost:3000/books',
		  data: $scope.book,
		  headers: {
		    'Access-Control-Allow-Origin': '*',
		  }
		})
		.success(function(response) {
			console.log('Foto cadastrada com sucesso!');
			console.log(response);
		})
		.error(function(error) {
			console.log(error);
		});
	};
});