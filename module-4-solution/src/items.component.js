( function(){
'use strict';

angular.module('data')
.component('itemsComponent',{
  templateUrl : 'templates/items-component.html',
  bindings :{
    items : '<'
  }
});
})();
