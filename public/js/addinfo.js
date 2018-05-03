//update an entry.
$("#entry").on("click", ".updateEntry", function (event) {
  event.preventDefault();

  $("#firstpage").hide();
  $("#secondpage").hide();
  $("#thirdpage").show();

  var id = $(this).data("id");
  console.log("update entry id: ", id);

  $.get("/api/entry/" + id).then(function (data) {
    $("#email-update").val(localStorage.getItem("email"), );
    $("#dest-update").val(data.destination);
    $("#act-update").val(data.activities);
    $("#rest-update").val(data.restaurants);
    $("#attr-update").val(data.attractions);
    $("#update-changes").data("id", data.id);
  })
}); //update Entry button ends here data.restaurants


// update changes button function.
$("#update-changes").on("click", function (event) {

  // event.preventDefault();

  $("#firstpage").hide();
  $("#secondpage").hide();

  var id = $(this).data("id");
  console.log("update-changes id: ", id);

  var updatedinfo = {
    // email: $("#email-update").val().trim(),
    email: localStorage.getItem("email"),
    destination: $("#dest-update").val().trim(),
    activities: $("#act-update").val().trim(),
    restaurants: $("#rest-update").val().trim(),
    attractions: $("#attr-update").val().trim(),
    id: id
  };//var updatedinfo ends here attractions

  $.ajax({
    method: "PUT",
    url: "/api/update",
    data: updatedinfo
  }).then(function (data) {
    // console.log("--------------------------------------");
    // console.log("AFTER UPDAING : ", data);        
  });

  //Empty each input box by replacing the value with an empty string
  $("#email-update").val("");
  $("#dest-update").val("");
  $("#act-update").val("");
  $("#rest-update").val("");
  $("#attr-update").val("");

  window.alert("Changes Successfully Updated!!!");

  setTimeout(function () {
    window.location.href = "./view.html";
  }, 3000);

}); //submit button ends here.
  
});//document ready function ends here.