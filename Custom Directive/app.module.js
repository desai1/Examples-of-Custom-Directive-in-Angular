(function() {
  'use strict';

  angular
    .module('app', [])
    .run(moduleRun);
    
  moduleRun.$inject = [];

  function moduleRun() {
    console.log('App Started');
  }
})();