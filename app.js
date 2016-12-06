// Code goes here

(function() {
  'use strict';

  angular
    .module('plunker', [])
    .controller('MainController', MainController)
    .directive('businessCard', businessCard);

  MainController.$inject = ['$timeout'];

  function MainController($timeout) {
    var mainVm = this;
    mainVm.line = 'AngularJS is awesome';

    mainVm.user = {
      "firstName": "Katarina",
      "lastName": "Wisozk",
      "email": "Claire.Purdy@hotmail.com",
      "address": {
        "city": "East Donny shire",
        "state": "MO",
      },
      "company": {
        "name": "egen",
        "website": "https://egen.io"
      },
      "profilePic": "http://lorempixel.com/640/480/abstract"
    };

    mainVm.manager = {
      "firstName": "Kaden",
      "lastName": "Hansen",
      "email": "Jayne15@hotmail.com",
      "address": {
        "city": "Hoppe side",
        "state": "RI",
      },
      "company": {
        "name": "Google",
        "website": "https://google.com"
      },
      "profilePic": "http://lorempixel.com/640/480/nature"
    };
    
    mainVm.logger = function () {
      console.dir(mainVm.user);
    };
  }

  function businessCard() {
    var directive = {
      //replace: true,
      scope: {
        person: '=',
        tagLine: '@',
        logFn: '&'
      },
      transclude: true,
      templateUrl: 'business-card.tmpl.html',
      link: function (scope, elem, attrs) {
        elem.on('click', function () {
          scope.logFn();
        });
      }
    };

    return directive;
  }

})();

