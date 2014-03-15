var game = angular.module("TicTacToe", []);
// game.gameRouter = angular.module('gameRouter', ['ngRoute']);

game.controller("GameCtrl", ['$scope', function($scope) {

  // Set scope variables:
  //    tiles
  //    status_indicators
  //    players
  //    win_combos
  //    current_player
  //    turns
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
      marker:    'E',
      img_url:   'img/ernie.jpg',
      indicator: $scope.status_indicators[0]
    },
    {
      name:      'Bert',
      marker:    'B',
      img_url:   'img/bert.jpg',
      indicator: $scope.status_indicators[1]
    }
  ];
  $scope.win_combos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];
  $scope.current_player = null;
  $scope.turns = 0;

  // Watch for changes to 'tiles' and reflect in DOM
  $scope.$watch('tiles', function(newVal, oldVal) {
    console.log($scope.current_player);
    console.log("changed");
  }, true);

  // Initialize
  $scope.initialize = function() {
    $scope.current_player = $scope.players[0];
  };

  $scope.togglePlayer = function() {
    if ($scope.current_player === $scope.players[0]) {$scope.current_player = $scope.players[1]}
    else {$scope.current_player = $scope.players[0]}
  };

  // Handle the click event
  $scope.handleClick = function(tileIndex) {
    $scope.tiles[tileIndex].letter = $scope.current_player.marker;
    $scope.tiles[tileIndex].clicked = true;
    $scope.turns ++;
    $scope.togglePlayer()
  };
$scope.initialize();
}]);
