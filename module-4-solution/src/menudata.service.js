( function(){
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);

function MenuDataService()
{
var service= this;

service.getAllCategories = function()
  {
    //this method should return a promise


  }


service.getItemsForCategory= function(categoryShortName)
  {
    //this method should return a promise


  }

}

})();
