/**
 * Created by Cheeky Chan on 1/12/2015.
 */
(function(){
    var myApp = angular.module('myApp', []);

    myApp.controller('seqCtrl', [ '$scope', function($scope){

        $scope.convertInput = function(input){




            
            $scope.output = input.toUpperCase();
        }

    }]);

})();