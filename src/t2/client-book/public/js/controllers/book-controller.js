angular.module('client-book').controller('BookController', function($scope, $http) {
	$scope.books = [];

	var promise = $http.get('http://localhost:3000/books.json');
	promise.then(function(response) {
		console.log('chega aqui????');
		console.log(response.data);
		$scope.books = response.data;
	}).catch(function(error) {
		console.log(error);
	});
});