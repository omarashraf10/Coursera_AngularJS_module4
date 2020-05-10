( function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

function RoutesConfig($stateProvider,$urlRouterProvider)
{
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home',{
    url : '/' ,
    templateUrl : 'templates/home.html'
  });

  $stateProvider.state('categories',{
    url : '/categories' ,
    templateUrl : 'templates/categories.html' ,
    controller: 'CategoriesViewController as categoryList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  });
}

})();
