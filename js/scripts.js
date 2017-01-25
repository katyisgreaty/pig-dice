//business logic

function rollDie() {
  return Math.floor( Math.random() * ( 1 + 6 - 1 ) ) + 1;
}

var resultsArray1 = [];
var resultsArray2 = [];


//front-end logic

$(document).ready(function() {
  $("button#roll1").click(function() {

    var thisRoll = rollDie();
    resultsArray1.push(" " + thisRoll);

    $("span.currentScore1").text(thisRoll);
    $("span.roundScore1").text(resultsArray1);
  });


  $("button#roll2").click(function() {

    var thisRoll = rollDie();
    resultsArray2.push(" " + thisRoll);

    $("span.currentScore2").text(thisRoll);
    $("span.roundScore2").text(resultsArray2);
  });
});
