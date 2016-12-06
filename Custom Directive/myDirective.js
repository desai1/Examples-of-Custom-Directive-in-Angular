(function() {
  'use strict';

  angular
    .module('app')
    .controller('Myctrl',Myctrl)
    .directive('myDirective',myDirective);
    
    Myctrl.$inject = ['$filter'];
   
    function Myctrl($filter){
       var Vm = this;
       
        Vm.message = '8454431214';
        
        Vm.data ={
          "firstName": "Ishit",
          "lastName": "Desai"
        };
        
        Vm.filteredMessage = $filter('telephone')(Vm.message);
    }
    
    function myDirective(){

        var directive = {
            transclude : true,
            replace: true,
            restrict: "EA",
            templateUrl: 'template.html' ,
            scope: {
              myTag : '@',
              user : '=',
              myResult : '@'
            },
            link: function(scope,elm,attrs){
            console.dir(scope);   
            console.dir(elm); 
            console.dir(attrs);
              
            }
        };
      return directive;
    }

})();