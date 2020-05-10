( function(){
'use strict';

angular.module('data')
.component('categoriesComponent',{
  templateUrl : 'templates/categories-component.html',
  bindings :{
    categories : '<'
  }
});
})();
