var game = angular.module("TicTacToe", []);
// game.gameRouter = angular.module('gameRouter', ['ngRoute']);

game.controller("GameCtrl", ['$scope', function($scope) {
  $scope.tiles = [
    {id: 0, letter: "", clicked: false},
    {id: 1, letter: "", clicked: false},
    {id: 2, letter: "", clicked: false},
    {id: 3, letter: "", clicked: false},
    {id: 4, letter: "", clicked: false},
    {id: 5, letter: "", clicked: false},
    {id: 6, letter: "", clicked: false},
    {id: 7, letter: "", clicked: false},
    {id: 8, letter: "", clicked: false},
  ];
  $scope.status_indicators = $('#teams li');
  $scope.players = [    {
      name:      'Ernie',
      marker:    '&times;',
      img_url:   'img/ernie.jpg',
      indicator: $scope.status_indicators[0]
    },
    {
      name:      'Bert',
      marker:    '&oslash;',
      img_url:   'img/bert.jpg',
      indicator: $scope.status_indicators[1]
    }
  ];
  $scope.win_combos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];
  $scope.initialize = function() {
  };

}]);