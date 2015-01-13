/**
 * Created by Cheeky Chan on 1/12/2015.
 */
(function(){
    var myApp = angular.module('myApp', []);

    myApp.controller('seqCtrl', [ '$scope', function($scope){

        $scope.convertInput = function(input){


            input = formatInput(input);

            if (checkBases(input)){
                input = replaceBases(input);

                $scope.output = input;
            } else {
                alert("Invalid sequence");
            }
        };

        var replaceBases = function(input){
            var count = 0;
            while(input.indexOf('U') != -1){
                input = input.replace('U', 'T');
                count += 1;
            }
            if (count > 0){
                alert("U replaced with T " + count + " times");
            }
            return input;
        };

        var checkBases = function(input){

            while(input.length > 0){
                if (input.charAt(0) == 'A' || input.charAt(0) == 'C' || input.charAt(0) == 'G' ||
                        input.charAt(0) == 'T' || input.charAt(0) == 'U'){
                    input = input.substring(1, input.length);
                } else {
                    return false;
                }
            }
            return true;
        };

        var formatInput = function(input){
            input = input.trim();
            input = input.replace(' ', '');
            input = input.toUpperCase();
            return input;
        };

    }]);

})();