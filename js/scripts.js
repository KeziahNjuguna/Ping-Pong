var theIntergers =[];
function game(theAnswer) {
  for (var index = 1; index <=theAnswer; index++)
        if (index %15===0) {
  theIntergers.push("ping pong");
    }else if (index % 5===0) {
      theIntergers.push("pong");
    } else if (index %3===0) {
      theIntergers.push("ping");
    }else {
      theIntergers.push(index);
    }
    }


$(document).ready(function() {
  $("#button").click(function() {
    var theAnswer = parseInt($("#numberInput").val());
    game(theAnswer);
    theIntergers.forEach(function(theAnswer){
      $("#results").append("<li>" +theAnswer + "</li>");
    });

  });
});

function submitForm( theIntergers) {
            document.contact-form.submit();
            document.contact-form.reset();
            }
