angular.module('client-book', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider.when('/books', {
		templateUrl: 'partials/index.html',
		controller: 'BooksController'
	});

	$routeProvider.when('/books/new', {
		templateUrl: 'partials/new.html',
		controller: 'BookController'
	});

	$routeProvider.otherwise({ redirectTo: 'books'});
});