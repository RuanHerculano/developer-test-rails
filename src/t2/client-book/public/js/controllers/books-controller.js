angular.module('client-book').controller('BooksController', function($scope, $http) {
	$scope.books = [];
	$scope.message = '';
	var url = 'http://localhost:3000/books';
	var responseExtension = '.json';

	var promise = $http.get(url + responseExtension);
	promise.then(function(response) {
		$scope.books = response.data;
		$scope.message = 'Lista de livros carregada com sucesso.'
	}).catch(function(error) {
		$scope.message = 'Erro ao carregar lista de livros.';
	});

	function destroy(book) {
		$http({
		  method: 'DELETE',
		  url: url + '/' + book.id + responseExtension,
		  data: { id: book.id },
		  headers: {
		    'Access-Control-Allow-Origin': '*',
		  }
		})
		.success(function(response) {
			var bookIndex = $scope.books.indexOf(book);
			$scope.books.splice(bookIndex, 1);
			$scope.message = 'Livro '+ book.title +' removido com sucesso!';
		})
		.error(function(error) {
			$scope.message = 'Não foi possível remover o livro ' + book.title;
		});
	};

	$scope.destroy = function(book) {
		destroy(book);
	};
});