var app = angular.module('ToDo', [])

app.run(function($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function() {
       $templateCache.removeAll();
    });
 });
