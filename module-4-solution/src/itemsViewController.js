( function(){
'use strict';

angular.module('data')
.controller('ItemsViewController',ItemsViewController);

ItemsViewController.$inject= ['items'];

function ItemsViewController(items)
{
  var ctrl =this;
  ctrl.list =items.data.menu_items;
//  console.log('items', items.data.menu_items);
};
})();
