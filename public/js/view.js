<<<<<<< HEAD
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

  // Save the destination they typed into the destination-search input
  var destinationSearched = $("#destination-search").val().trim();

  // Make an AJAX get request to our api, including the user's destination data in the url
  $.get("/api/entry/:id" + destinationSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderDestination(data);

  });

=======
$(document).ready(function () {
  $.get("/api/entry").then(function (data) {
    console.log(data)
    if (data.length !== 0) {

      // $("#stats").empty();
      // $("#stats").show();

      for (var i = 0; i < data.length; i++) {

        var div = $("<div>");
        div.attr("id", data[i].id);
        var btnDiv = $("<div>")
        var button = $("<button>");
        var button2 = $("<button>");
        var button3 = $("<button>");
        // var p = $("<p>")
        button.attr('data-name', data[i].destination)
        button2.attr('data-attr', data[i].attractions)
        button3.attr('data-rest', data[i].restaurants)
        // p.text("Restaurants: ");
        // p.append(data[i].restaurants)
        button.addClass("btn btn-default btn-xs dest");
        button2.addClass("btn btn-default btn-xs attract");
        button3.addClass("btn btn-default btn-xs activities");
        // div.append(p)
        // button.attr("data", "rest1")
        button.append("Restaurant");
        button2.append("Fun");
        button3.append("Features");
        div.append("<h2>" + data[i].destination + "</h2>");
        div.append("<p>Activities: " + data[i].activities + "</p>");
        div.append("<p>Restuarants: " + data[i].restaurants + "</p>");

        div.append("<p>Attractions: " + data[i].attractions + "</p>");
        // div.append("<button class='delete' data-id='" + data[i].id + "'>delete</button><br>");
        btnDiv.append(button);
        btnDiv.append(button2);
        btnDiv.append(button3);
        div.append(btnDiv)
        $("#stats").append(div);

      };
    };
  });
>>>>>>> 7292d4178bcaf79a8147076e86a9b0db876efaf3
});