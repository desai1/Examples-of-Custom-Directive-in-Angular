(function() {
  'use strict';

  angular
    .module('app')
    .filter('telephone', telephoneFilter);

  function telephoneFilter() {
    return function(Str) {
      var self = [];

      if (Str.length !== 10) {
        return '';
      }

      self.push('(');
      self.push(Str.substring(0, 3));
      self.push(') ');
      self.push(Str.substring(3, 6));
      self.push('-');
      self.push(Str.substring(6));

      return self.join('');
    };
  }
})();
