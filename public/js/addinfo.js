
$("#loggedemail").html(localStorage.getItem("email"));

$("#submit-btn").on("click", function (event) {
  event.preventDefault();

  var newDestination = {
    email: localStorage.getItem("email"),

    destination: $("#destInput").val().trim(),
    attractions: $("#attrInput").val().trim(),
    activities: $("#actiInput").val().trim(),
    restaurants: $("#restInput").val().trim()
  };

  $.post("/api/new", newDestination)
    .then(function (results) {
      console.log("RESULTS: ", results);
      $.ajax({
        method: "GET",
        url: "/api/entry"
      }).then(function (data) {

        showtravelinfo(data);
      });

      function showtravelinfo(dbtravelinfo) {
        $("#entry").empty();
        var argv;
        for (let i = 0; i < dbtravelinfo.length; i++) {
          arvg = dbtravelinfo[dbtravelinfo.length - 1];
        }

        addOneEntry(arvg);
      } //showtravelinfo() ends here.        

      function addOneEntry(test) {
        console.log("addOneEntry () argv: ", test);
        var newEntryElement = $("<div>");
        newEntryElement.addClass("entryclass");
        // newEntryElement.append(`<p>id: ${userEntry.id}</p>`);
        newEntryElement.append(`<p>Email: ${test.email}</p>`);
        newEntryElement.append(`<p>Destination: ${test.destination}</p>`);
        newEntryElement.append(`<p>Attractions: ${test.attractions}</p>`);
        newEntryElement.append(`<p>Restaurants: ${test.restaurants}</p>`);
        newEntryElement.append(`<p>Activities: ${test.activities}</p>`);
        newEntryElement.append(`<button type="submit" data-id='${test.id}' class="btn btn-primary deleteEntry">Delete</button>`);
        newEntryElement.append(`<button type="submit" data-id='${test.id}' class="btn btn-primary updateEntry">Update</button>`);
        

        $("#entry").append(newEntryElement);
        // console.log("add one entry: ",newEntryElement)
      }

    }); //$.post ends here.   

  // Empty each input box by replacing the value with an empty string
  $("#emailadd").val("");
  $("#destInput").val("");
  $("#attrInput").val("");
  $("#actiInput").val("");
  $("#restInput").val("");

}); //submit button ends here.

$("#update-changes").on("click", function (event) {
  event.preventDefault();

  var id = $(this).data("id");
  console.log("update-changes id: ", id);

  var updatedinfo = {
    email: $("#email-update").val().trim(),
    destination: $("#dest-update").val().trim(),
    attractions: $("#act-update").val().trim(),
    activities: $("#rest-update").val().trim(),
    restaurants: $("#attr-update").val().trim()
  };

  console.log("updated changes updatedInfo: ", updatedinfo);

  $.post("/api/new", updatedinfo)
    .then(function (results) {
      console.log("updated RESULTS: ", results);
      $.ajax({
        method: "update",
        url: "/api/update/"
      }).then(function (data) {
        console.log("--------------------------------------");
        console.log("AFTER UPDAING : ", data);        
      });

     }); //$.post ends here.   

  // Empty each input box by replacing the value with an empty string
  // $("#emailadd").val("");
  // $("#destInput").val("");
  // $("#attrInput").val("");
  // $("#actiInput").val("");
  // $("#restInput").val("");

}); //submit button ends here.
// delete an entry.
$("#entry").on("click", ".deleteEntry", function (event) {
  event.preventDefault();

  var id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "/api/delete/" + id
  }).then(function (data) {
    console.log("delete data: ", data);
  });
  // $("#entry").empty();
}); //deleteEntry button ends here


// update entry.
$("#updateEntry").on("click", function (event) {
  // event.preventDefault();



}); //updateEntry button ends here