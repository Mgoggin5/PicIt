// from unit 15 activity 5 librry

// When user clicks add-btn
$("#submit-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newDestination = {
      email: $("#emailadd").val().trim(),
      destination: $("#destInput").val().trim(),
      attractions: $("#attrInput").val().trim(),
      activities: $("#actiInput").val().trim(),
      restaurants: $("#restInput").val().trim()      
    };
  
    console.log(newDestination);
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newDestination)
      // On success, run the following code
      .then(function(results) {
        // Log the data we found
        console.log("results: ", results);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#emailadd").val("");
    $("#destInput").val("");
    $("#attrInput").val("");
    $("#actiInput").val("");
    $("#restInput").val("");    
  });