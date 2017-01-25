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

    var arraySum1 = 0;
    for(var i=0; i<resultsArray1.length; i++){
    arraySum1 += parseInt(resultsArray1[i]);
  };

  $("span.currentScore1").text(thisRoll);
  $("span.roundScore1").text(resultsArray1 + " " + "=" + " " + arraySum1);
  });


  $("button#roll2").click(function() {

    var thisRoll = rollDie();
    resultsArray2.push(" " + thisRoll);

    var arraySum2 = 0;
    for(var i=0; i<resultsArray2.length; i++){
    arraySum2 += parseInt(resultsArray2[i]);
  };

    $("span.currentScore2").text(thisRoll);
    $("span.roundScore2").text(resultsArray2 + " " + "=" + " " + arraySum2);
  });
});
