angular.module('client-book').controller('BookController', function($scope, $http) {
	$scope.book = {};
	$scope.message = '';

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
			$scope.book = {};
			$scope.message = 'Livro cadastrado com sucesso!';
		})
		.error(function(error) {
			$scope.message = 'Não foi possível cadastrar o livro';
		});
	};
});