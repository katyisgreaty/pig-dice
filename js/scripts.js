//business logic

function getRandomizer(bottom, top) {
  return function() {
      return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
  }
}
var rollDie = getRandomizer( 1, 6 );

var results = ""
for ( var i = 0; i<1; i++ ) {
  results += rollDie() + " ";
}

console.log(results);




//front-end logic

$(document).ready(function() {
  $("button#roll").click(function(event) {
    event.preventDefault();


    $("span.currentScore").text(rollDie());
  });

  // $("button#hold").submit(function(event) {
  //   event.preventDefault();
  //
  //
  });
// });
