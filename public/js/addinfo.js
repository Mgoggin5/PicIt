// from unit 15 activity 5 librry
$(document).ready(function() {
$("#loggedemail").text(localStorage.getItem("email"));
// When user clicks add-btn
var newDestination = {
  destInput: $("#title").val().trim(),
  activities: $("#actiInput").val().trim(),
  restaurants: $("#RestInput").val().trim(),
  attractions: $("#AttrInput").val().trim(),
  email: $("#loggedemail")
};

$("#submit-btn").on("submit", function(event) {
    event.preventDefault();

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newDestination)
      // On success, run the following code
      .then(function(results) {
        // Log the data we found
        console.log("results: ", results);
      });
  

    // Empty each input box by replacing the value with an empty string
    // $("#emailadd").val("");
    $("#destInput").val("");
    $("#attrInput").val("");
    $("#actiInput").val("");
    $("#RestInput").val("");
    $("#AttrInput").val("");
  
  });
})
