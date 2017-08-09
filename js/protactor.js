angular.module('myApp', [])
.controller('myCtrl', ['$scope', function($scope) {
  $scope.IsVisible = true; // let's set this to false to kick things off.

  $scope.ShowHide = function(){
  //  if($scope.IsVisible = false) return $scope.IsVisible = false;
  $scope.IsVisible = $scope.IsVisible ? false : true;
    }

  }]);
