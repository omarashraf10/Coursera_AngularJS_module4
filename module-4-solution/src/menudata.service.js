( function(){
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject=['$http'];
function MenuDataService($http)
{
var service= this;

service.getAllCategories = function()
  {
    //this method should return a promise
    return $http({
    method : 'GET',
    url : 'https://davids-restaurant.herokuapp.com/categories.json'
  })

  }

service.getItemsForCategory= function(categoryShortName)
  {
    //this method should return a promise


  }

}

})();
