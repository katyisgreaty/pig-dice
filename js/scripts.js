//business logic

function rollDie() {
  return Math.floor( Math.random() * ( 1 + 6 - 1 ) ) + 1;
}


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
  var playerThree = new Player();

  $("button.onePlayer").click(function() {
    $("div.computer").show();
    $("div.user").hide();
    $("div.choice").hide();
  });

  $("button.twoPlayer").click(function() {
    $("div.user").show();
    $("div.computer").hide();
    $("div.choice").hide();
  });


  $("button#roll1").click(function() {
    var thisRoll = rollDie();
    if (thisRoll === 1) {
      $("span.roundScore1").text("");
      $("button#roll1").hide();
      $("span.roundColor").show();
      $("span.roundColor").text("You rolled a 1, your turn is over!");

      $("button.okayOne").show();
      playerOne.resultsArray = [];
      $("span.currentScore1").text("1");
    } else {
      playerOne.resultsArray.push(" " + thisRoll);
      $("span.currentScore1").text(thisRoll);
      $("span.roundScore1").text(playerOne.resultsArray + " " + "=" + " " + playerOne.calcSum());
    }
  });
  $("button.okayOne").click(function(){
    playerOne.total += playerOne.calcSum();
    $("span.playerOneTotal").text(playerOne.total);
    $("button#roll2").show();
    $("button#roll3").show();
    $(".playerOne").toggle();
    $(".playerTwo").toggle();
    $(".playerThree").toggle();
    $("span.roundScore1").text("");
    $("span.currentScore1").text("");
    $("button.okayOne").hide();
    $("span.roundColor").hide();
    return (Computer());
  });

  $("button#hold1").click(function() {
    playerOne.total += playerOne.calcSum();
    playerOne.resultsArray = [];
    $("button#roll2").show();
    $("button#roll3").show();
    $("span.currentScore1").text("");
    $("span.roundScore1").text("");
    $("span.playerOneTotal").text(playerOne.total);
    $("button.okayOne").hide();
    $(".playerOne").toggle();
    $(".playerTwo").toggle();
    $(".playerThree").toggle();
    if (playerOne.total >= 100) {
      $("span.playerOneTotal").text(playerOne.total);
      $(".playerOneWins").show();
      playerOne.total = 0;
      playerTwo.total = 0;
      playerThree.total = 0;
      $("button#roll2").hide();
      $("button#hold2").hide();
      $("button#roll3").hide();
      $("button#hold3").hide();
    }
    return (Computer());
  });

  $("button#roll2").click(function() {
    var thisRoll = rollDie();
    if (thisRoll === 1) {
      $("span.roundScore2").text("");
      $("button#roll2").hide();
      $("span.roundColor2").show();
      $("span.roundColor2").text("You rolled a 1, your turn is over!");
      $("button.okayTwo").show();
      playerTwo.resultsArray = [];
      $("span.currentScore2").text("1");
    } else {
      playerTwo.resultsArray.push(" " + thisRoll);
      $("span.currentScore2").text(thisRoll);
      $("span.roundScore2").text(playerTwo.resultsArray + " " + "=" + " " + playerTwo.calcSum());
    }
  });

  $("button.okayTwo").click(function(){
    playerTwo.total += playerTwo.calcSum();
    $("span.playerTwoTotal").text(playerTwo.total);
    $("button#roll1").show();
    $(".playerOne").toggle();
    $(".playerTwo").toggle();
    $("span.roundScore2").text("");
    $("span.currentScore2").text("");
    $("button.okayTwo").hide();
    $("span.roundColor2").hide();
  });


  $("button#hold2").click(function() {
    playerTwo.total += playerTwo.calcSum();
    playerTwo.resultsArray = [];
    $("button#roll1").show();
    $("span.currentScore2").text("");
    $("span.roundScore2").text("");
    $("span.playerTwoTotal").text(playerTwo.total);
    $("button.okayTwo").hide();
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











  var Computer = function() {
    var thisRoll = rollDie();
    if (thisRoll === 1) {
      $("span.roundScore3").text("");
      $("button#roll3").hide();
      $("span.roundColor3").show();
      $("span.roundColor3").text("Computer rolled a 1, the Computer's turn is over!");
      playerThree.resultsArray = [];
      $("span.currentScore3").text("1");
    } else {
      playerThree.resultsArray.push(" " + thisRoll);
      $("span.currentScore3").text(thisRoll);
      $("span.roundScore3").text(playerThree.resultsArray + " " + "=" + " " + playerThree.calcSum());
    }
    playerThree.total += playerThree.calcSum();
    $("span.playerThreeTotal").text(playerThree.total);
    $("button#roll1").show();
    // $(".playerOne").toggle();
    // $(".playerThree").toggle();
    $("span.roundScore3").text("");
    $("span.currentScore3").text("");
    $("button.okayThree").hide();
    $("span.roundColor3").hide();
    playerThree.total += playerThree.calcSum();
    playerThree.resultsArray = [];
    $("button#roll1").show();
    $("span.currentScore3").text("");
    $("span.roundScore3").text("");
    $("span.playerThreeTotal").text(playerThree.total);
    $("button.okayThree").hide();
    $(".playerOne").toggle();
    $(".playerThree").toggle();
    if (playerThree.total >= 100) {
      $("span.playerThreeTotal").text(playerThree.total);
      $("#playerThreeWins").show();
      playerOne.total = 0;
      playerThree.total = 0;
      // $("button#roll1").hide();
      // $("button#hold1").hide();
    }
  };
  //COMPUTER FUNCTIONS





  $(".newgame").click(function(){
    $("span.playerOneTotal").text("");
    $("span.playerTwoTotal").text("");
    $("span.playerThreeTotal").text("");
    $("span.currentScore1").text("");
    $("span.currentScore2").text("");
    $("span.currentScore3").text("");
    $("span.roundScore1").text("");
    $("span.roundScore").text("");
    $("span.roundScore3").text("");
    $("span.playerOneWins").hide();
    $("span#playerTwoWins").hide();
    $("span#playerThreeWins").hide();
    $("button#roll1").show();
    $("button#hold1").show();
    $("button#roll2").show();
    $("button#hold2").show();
    $("button#roll3").show();
    $("button#hold3").show();
    $("div.user").hide();
    $("div.computer").hide();
    $("div.choice").show();
    playerOne.total = 0;
    playerTwo.total = 0;
    playerThree.total = 0;
  });
});
