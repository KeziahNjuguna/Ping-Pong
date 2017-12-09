

$(document).ready(function() {
    $("button").click(function() {
      var theAnswers = parseInt($("input#number").val());
      (theAnswers);
      theIntergers.forEach(function(theAnswer){
      $("#result").append("<li>"+ theAnswer + "</li>");
    });

    });
  });

  var theIntergers = []
  function (theAnswer) {
    for (var index = 1; index <=theAnswer; index++)
    if (index %15===0){
      theIntergers.push("ping pong");
    }else if (index %5===0){
      theIntergers.push("pong");
    }else if (index %3===0) {
    }else {
      theIntergers.push("index");
    }

    }




    }
