function renderDestination(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].destination + "</h2>");
      div.append("<p>Act: " + data[i].actiInput + "</p>");
      div.append("<p>Rest: " + data[i].restInput + "</p>");
      div.append("<p>Attr: " + data[i].attrInput + "</p>");

      $("#stats").append(div);

    }
  }   
}

$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var destinationSearched = $("#destination-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/entry" + destinationSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderDestination(data);

  });

});