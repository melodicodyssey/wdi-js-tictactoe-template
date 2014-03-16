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
  $scope.winner = {};
  $scope.GameOver = false;
  $scope.message = "Tie!"

  // Watch for changes to 'tiles' and reflect in DOM
  $scope.$watch('tiles', function(newVal, oldVal) {
    console.log("changed");
  }, true);

  // Define initialize function
  $scope.initialize = function() {
    $scope.current_player = $scope.players[0];
  };

  // Switch the Current Player
  $scope.togglePlayer = function() {
    if ($scope.current_player === $scope.players[0]) {$scope.current_player = $scope.players[1];}
    else {$scope.current_player = $scope.players[0];}
  };

  // Check if a winning combo has been met
  $scope.checkWinner = function() {
    var p1 = [];
    var p2 = [];
    var winner = false;
    _.each($scope.tiles, function(tile) {
      if (tile.letter === $scope.players[0].marker) {p1.push(tile.id);}
      if (tile.letter === $scope.players[1].marker) {p2.push(tile.id);}
    });
    // Use _.intersection function to compare each player's tiles against winning combos
    _.each($scope.win_combos, function(combo){
      if (_.intersection(combo, p1).length === 3) {$scope.winner = $scope.players[0]; $scope.declareWinner($scope.players[0]);}
      if (_.intersection(combo, p2).length === 3) {$scope.winner = $scope.players[1]; $scope.declareWinner($scope.players[1]);}
    });
    // Else if all tiles are filled without a winning combo matched, game is tied
    if ($scope.turns === 9 && _.isEqual($scope.winner, {})) {
      console.log("Tie game!");
      $scope.GameOver = true;
    }
  };

  // Declare a winner!
  $scope.declareWinner = function(player) {
    console.log(player.name + " wins!");
    // $scope.winner = player;
    $scope.GameOver = true;
    $scope.message = player.name + " Wins!";
  };

  // Handle the click event
  $scope.handleClick = function(tileIndex) {
    var tile = $scope.tiles[tileIndex];
    if (tile.clicked === false) {
      tile.letter = $scope.current_player.marker;
      tile.clicked = true;
      $scope.turns ++;
      $scope.checkWinner();
      $scope.togglePlayer();
    }
  };

  $scope.new_game = function() {
    // see http://stackoverflow.com/questions/2405117/difference-between-window-location-href-window-location-href-and-window-location
    // nothing to add here
    window.location.href = window.location.href;
  };

  // Initialize the game!
  $scope.initialize();
}]);
