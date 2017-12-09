

    var theIntergers =[];
    function (theAnswer) {
      for (var index = 1; index <=finisher; index++)
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
        theAnswer;
        theIntergers.forEach(function(theAnswer){
          $("#results").append("<li>" +theAnswer + "</li>");
        });

      });
    });
