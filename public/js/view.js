
  
  function renderDestination(data) {
    if (data.length !== 0) {
  
      $("#stats").empty();
      $("#stats").show();
  
      for (var i = 0; i < data.length; i++) {
  
        var div = $("<div>");
  
        div.append("<h2>" + data[i].title + "</h2>");
        div.append("<p>actiInput: " + data[i].actiInput + "</p>");
        div.append("<p>RestInput: " + data[i].RestInput + "</p>");
        div.append("<p>AttrInput: " + data[i].AttrInput + "</p>");
        div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE DESTINATION</button>");
  
        $("#stats").append(div);
  
      }
  
      $(".delete").click(function() {
  
        var info = {
          id: $(this).attr("data-id")
        };
  
        $.post("/api/delete", info)
          // On success, run the following code
          .then(function(delData) {
            // Log the data we found
            console.log(delData);
            console.log("Deleted Successfully!");
          });
  
        $(this).closest("div").remove();
  
      });
  
    }
  }
  