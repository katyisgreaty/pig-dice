//business logic

function rollDie() {
  return Math.floor( Math.random() * ( 1 + 6 - 1 ) ) + 1;
}
// if (rollDie === 1) {
//   alert("Your turn is over!")
// }

function Player() {
  this.resultsArray = [];
  this.total = 0;
}

Player.prototype.calcSum = function() {
  var arraySum = 0;
  for(var i=0; i<this.resultsArray.length; i++){
    arraySum += parseInt(this.resultsArray[i]);
  };
  return arraySum;
}


//front-end logic

$(document).ready(function() {
  var playerOne = new Player();
  var playerTwo = new Player();

  $("button#roll1").click(function() {
    var thisRoll = rollDie();
    playerOne.resultsArray.push(" " + thisRoll);
    $("span.currentScore1").text(thisRoll);
    $("span.roundScore1").text(playerOne.resultsArray + " " + "=" + " " + playerOne.calcSum());
  });

  $("button#hold1").click(function() {
    playerOne.total += playerOne.calcSum();
    playerOne.resultsArray = [];
    $("span.currentScore1").text("");
    $("span.roundScore1").text("");
    $("span.playerOneTotal").text(playerOne.total);
    $(".playerOne").toggle();
    $(".playerTwo").toggle();
    if (playerOne.total >= 100) {
      $("span.playerOneTotal").text(playerOne.total);
      $("#playerOneWins").show();
      playerOne.total = 0;
      playerTwo.total = 0;
      $("button#roll2").hide();
      $("button#hold2").hide();
    }
  });

  $("button#roll2").click(function() {
    var thisRoll = rollDie();
    playerTwo.resultsArray.push(" " + thisRoll);
    $("span.currentScore2").text(thisRoll);
    $("span.roundScore2").text(playerTwo.resultsArray + " " + "=" + " " + playerTwo.calcSum());
  });

  $("button#hold2").click(function() {
    playerTwo.total += playerTwo.calcSum();
    playerTwo.resultsArray = [];
    $("span.currentScore2").text("");
    $("span.roundScore2").text("");
    $("span.playerTwoTotal").text(playerTwo.total);
    $(".playerOne").toggle();
    $(".playerTwo").toggle();
    if (playerTwo.total >= 100) {
      $("span.playerTwoTotal").text(playerTwo.total);
      $("#playerTwoWins").show();
      playerOne.total = 0;
      playerTwo.total = 0;
      $("button#roll1").hide();
      $("button#hold1").hide();
    }
    });


  $(".newgame").click(function(){
      $("span.playerOneTotal").text("");
      $("span.playerTwoTotal").text("");
      $("span.currentScore1").text("");
      $("span.currentScore2").text("");
      $("span.roundScore1").text("");
      $("span.roundScore").text("");
      $("span#playerOneWins").hide();
      $("span#playerTwoWins").hide();
      $("button#roll1").show();
      $("button#hold1").show();
      $("button#roll2").show();
      $("button#hold2").show();
      playerOne.total = 0;
      playerTwo.total = 0;
  });
});
