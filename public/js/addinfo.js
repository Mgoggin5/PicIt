// from unit 15 activity 5 librry

// When user clicks add-btn
$("#submit-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newDestination = {
      destInput: $("#title").val().trim(),
      author: $("#actiInput").val().trim(),
      genre: $("#RestInput").val().trim(),
      pages: $("#AttrInput").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newDestination)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#destInput").val("");
    $("#actiInput").val("");
    $("#RestInput").val("");
    $("#AttrInput").val("");
  
  });