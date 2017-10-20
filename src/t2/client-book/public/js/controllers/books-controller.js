angular.module('client-book').controller('BooksController', function($scope, $http) {
	$scope.books = [];
	$scope.message = '';

	var promise = $http.get('http://localhost:3000/books.json');
	promise.then(function(response) {
		$scope.books = response.data;
	}).catch(function(error) {
		console.log(error);
	});

	$scope.destroy = function(id) {
		$http.delete('http://localhost:3000/books/' + id)
		.success(function(response) {
			$scope.message = 'Livro removido com sucesso!';
		})
		.error(function(error) {
			$scope.message = 'Não foi possível remover o livro';
		});
	};
});