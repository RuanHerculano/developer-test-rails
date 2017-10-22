angular.module('client-book').controller('BookController', function($scope, $http, $routeParams) {
	$scope.book = {};
	$scope.message = '';
	var url = 'http://localhost:3000/books';
	var responseExtension = '.json';
	var headers = [
		{ 'Access-Control-Allow-Origin': '*'}
   	];

	function update() {
		$http({
		    method: 'PUT',
		    url: url + '/' + $scope.book.id + responseExtension,
		    data: $scope.book,
		  	headers: headers
		})
		.success(function(response) {
			$scope.book = {};
			$scope.message = 'Livro Atualizado com sucesso!';
		})
		.error(function(error) {
			$scope.message = 'Não foi possível cadastrar o livro';
		});
	};

	function create() {
		$http({
		    method: 'POST',
		    url: url + responseExtension,
		    data: $scope.book,
		  	headers: headers
		})
		.success(function(response) {
			$scope.book = {};
			$scope.message = 'Livro cadastrado com sucesso!';
		})
		.error(function(error) {
			$scope.message = 'Não foi possível cadastrar o livro';
		});
	};

	function show() {
		$http.get(url + '/' + $routeParams.bookId + responseExtension)
		.success(function(response) {
			$scope.book = response;
			$scope.message = 'Foto obtida com sucesso';
		})
		.error(function(error) {
			$scope.message = 'Não foi possível obter a foto';
		});
	};

	if($routeParams.bookId) {
		show();
	}

	$scope.submit = function() {
		if ($scope.formulary.$valid) {
			if ($scope.book.id) {
				update();
			} else {
				create();
			}
		}
	};
});