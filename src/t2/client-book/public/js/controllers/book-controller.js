angular.module('client-book').controller('BookController', function($scope, $http) {
	$scope.book = {};

	$scope.submit = function() {
		console.log($scope.book);
		$http.post('http://localhost:3000/books', $scope.book)
		.success(function(response) {
			console.log('Foto cadastrada com sucesso!');
			console.log(response);
		})
		.error(function(error) {
			console.log(error);
		});
	};
});