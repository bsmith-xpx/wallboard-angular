(function () {
    'use strict';

    angular
		.module('everest.admin').config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.html',
        });

        $routeProvider.when('/employee', {
            templateUrl: 'views/employee/employee.html',
            controller:'EmployeeController',
            controllerAs:'employee',
        });

        $routeProvider.when('/employee/:id', {
            templateUrl: 'views/employee/view_employee.html',
            controller:'ViewEmployeeController',
            controllerAs:'employee',
        });

        $routeProvider.when('/employee/:id/edit', {
            templateUrl: 'views/employee/edit_employee.html',
            controller:'EditEmployeeController',
            controllerAs:'employee',
        });

        $routeProvider.otherwise({
            redirectTo: '/home',
        });
    }

})();