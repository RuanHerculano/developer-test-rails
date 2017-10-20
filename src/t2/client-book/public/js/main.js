angular.module('client-book', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	
	$routeProvider.otherwise({ redirectTo: 'books'});

	$routeProvider.when('/books', {
		templateUrl: 'partials/index.html',
		controller: 'BooksController'
	});

	$routeProvider.when('/books/new', {
		templateUrl: 'partials/new.html',
		controller: 'BookController'
	});

});