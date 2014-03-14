var game = game || {};

// game.gameRouter = angular.module('gameRouter', ['ngRoute']);

// game.TicTacToe = angular.module("TicTacToe", ['gameRouter']);

var game = angular.module("TicTacToe", []);

game.controller("GameCtrl", ['$scope', function($scope) {
  $scope.board = [];
  $scope.win_combos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];
  $scope.initialize = function() {

  };

}]);