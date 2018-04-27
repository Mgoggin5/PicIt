// from unit 15 activity 5 librry
$(function() {
$("#loggedemail").text(localStorage.getItem("email"));
// When user clicks add-btn
$("#submit-btn").on("click", function(event) {
    event.preventDefault();
    

    // Make a newBook object
    var newDestination = {
      destInput: $("#title").val().trim(),
      activities: $("#actiInput").val().trim(),
      restaurants: $("#RestInput").val().trim(),
      attractions: $("#AttrInput").val().trim(),
      email: $("#loggedemail")
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
})