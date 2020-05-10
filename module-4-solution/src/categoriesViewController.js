( function(){
'use strict';

angular.module('data')
.controller('CategoriesViewController',CategoriesViewController);

CategoriesViewController.$inject= ['items'];

function CategoriesViewController(items)
{
  var ctrl =this;
  ctrl.list =items.data;

};
})();
