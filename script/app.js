/**
 * Created by arezkidrir on 24/03/2016.
 */
(function () {
    'use strict';
    var _templateBase = "./script";

    var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate']);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/',{
           templateUrl : _templateBase + '/customers/customer.html',
           controller : 'customerController',
           controllerAs : '_ctrl'
        });
        $routeProvider.otherwise({ redirectTo : '/'});

        }
    ]);
})();