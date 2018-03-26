angular.module('app.services', [])

.service('testService', ['$scope', 
    function ($scope) {
    	this.users = ['John', 'James', 'Jake'];
    }])
