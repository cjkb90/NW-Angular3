'use strict';

var app = angular.module('app', ['ui.router']);

app.directive('myDirective', function(){
	return {
		restrict: 'E', //this could be E(lement) A(ttribute) or C(lass)
		templateUrl: '/browser/products/products.html',
		link: function(scope, element, attribute){
			scope.myVariable = "Hello there, I am scope.myVariable"
		}
	}
})