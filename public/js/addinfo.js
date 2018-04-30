// from unit 15 activity 5 librry
$(document).ready(function() {
$("#loggedemail").html(localStorage.getItem("email"));

// console.log("email")

$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  // Make a destination object
  var newDestination = { 
    email: localStorage.getItem("email"),
    destination: $("#destInput").val().trim(),
    attractions: $("#attrInput").val().trim(),
    activities: $("#actiInput").val().trim(),
    restaurants: $("#restInput").val().trim()      
  };

  $.post("/api/new", newDestination)
  // On success, run the following code
  .then(function(results) {
  // Log the data we found
  // console.log("results: ", results); //working
  
  // from unit 15 activity 1 chirp.js
  $.ajax({
    method: "GET",
    url: "/api/entry"
  }).then(function(data){
    console.log("*********************");
    console.log("ajax request: ", data);
    showtravelinfo(data);  
  });

  function showtravelinfo(dbtravelinfo){
    $("#entry").empty();
    for (let i = 0; i < dbtravelinfo.length; i++) {
      const element = dbtravelinfo[i];  
      console.log("showtraveelinfo() element: ", element)
      addOneEntry(element);
    }
  }

  function addOneEntry(userEntry){
    var newEntryElement = $("<div>");
    newEntryElement.addClass("entryclass");
    newEntryElement.append(`<p>id: ${userEntry.id}</p>`);
    newEntryElement.append(`<p>Email: ${userEntry.email}</p>`);
    newEntryElement.append(`<p>Destination: ${userEntry.destination}</p>`);
    newEntryElement.append(`<p>Attractions: ${userEntry.attractions}</p>`);
    newEntryElement.append(`<p>Activities: ${userEntry.activities}</p>`);
    newEntryElement.append(`<p>Restaurants: ${userEntry.restaurants}</p>`);
    $("#entry").append(newEntryElement);
    console.log("add one entry: ",newEntryElement)
  }

  }); //$.post ends here.     

  // Empty each input box by replacing the value with an empty string
  // $("#emailadd").val("");
  $("#destInput").val("");
  $("#attrInput").val("");
  $("#actiInput").val("");
  $("#restInput").val("");    


});//submit button ends here.
})