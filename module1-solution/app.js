(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
 $scope.lunchs = "";
 $scope.isLunchTooMuch = "";
 $scope.color = "";

 $scope.checkLunch = function(){
   var lunchs = $scope.lunchs.split(',');
   var length = $scope.checkLength(lunchs);
   if (length <= 2) {
     $scope.isLunchTooMuch = "Enjoy!";
     $scope.color = "green";
   }else {
      $scope.isLunchTooMuch = "Too much!";
      $scope.color="red";
   }
 };

 $scope.checkLength = function(strArray){
   var length = 0;
  for (var i = 0; i < strArray.length; i++) {
      length += strArray[i] == "" ? 0: 1;
  }
  return length;
 };
}

})();
