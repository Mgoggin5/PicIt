$(document).ready(function () {
  // $("#loggedemail").html(localStorage.getItem("email"));
    $("#secondpage").hide();
    $("#thirdpage").hide();
    
  $("#submit-btn").on("click", function (event) {
    event.preventDefault();
    
    $("#secondpage").show();
  
      var newDestination = {
      // email: localStorage.getItem("email"),
      email: $("#emailadd").val().trim(),
      destination: $("#destInput").val().trim(),
      attractions: $("#attrInput").val().trim(),
      activities: $("#actiInput").val().trim(),
      restaurants: $("#restInput").val().trim()
    };
  
    $.post("/api/new", newDestination)
      .then(function (results) {
        // console.log("First submit RESULTS: ", results);
        $.ajax({
          method: "GET",
          url: "/api/entry"
        }).then(function (data) {
          // console.log("*********************");
          // console.log("First ajax request: ", data);
          showtravelinfo(data);
        });
  
        function showtravelinfo(dbtravelinfo) {
          $("#entry").empty();
          var argv;
          for (let i = 0; i < dbtravelinfo.length; i++) {
            arvg = dbtravelinfo[dbtravelinfo.length - 1];
          }
          // console.log("showtraveelinfo() dbtravelinfo.length: ", arvg);              
          
          addOneEntry(arvg);
        } //showtravelinfo() ends here.              
  
        function addOneEntry(data) {
          var newEntryElement = $("<div>");
          newEntryElement.addClass("entryclass");
          newEntryElement.append(`<p>Email: ${data.email}</p>`);
          newEntryElement.append(`<p>Destination: ${data.destination}</p>`);
          newEntryElement.append(`<p>Attractions: ${data.attractions}</p>`);
          newEntryElement.append(`<p>Activities: ${data.activities}</p>`);
          newEntryElement.append(`<p>Restaurants: ${data.restaurants}</p>`);
          newEntryElement.append(`<button type="submit" data-id='${data.id}' class="btn btn-primary deleteEntry">Delete</button>`);
          newEntryElement.append(`<button type="submit" data-id='${data.id}' class="btn btn-primary updateEntry">Update</button>`);
          $("#entry").append(newEntryElement);
          // console.log("add one entry: ",newEntryElement)
        }
  
      }); //$.post ends here.   
  
    
    $("#emailadd").val("");
    $("#destInput").val("");
    $("#attrInput").val("");
    $("#actiInput").val("");
    $("#restInput").val("");
  
  }); //submit button ends here.
  
  
  // delete an entry.
  $("#entry").on("click", ".deleteEntry", function (event) {
    event.preventDefault();
  
    $("#secondpage").hide();
  
    var id = $(this).data("id");
    // console.log("delete entry id: ", id);
  
    $.ajax({
      method: "DELETE",
      url: "/api/delete/" + id
    }).then(function (data) {
      // console.log("delete data: ", data);
    });
    $("#entry").empty();
  }); //deleteEntry button ends here
  
  
  //update an entry.
  $("#entry").on("click", ".updateEntry", function (event) {
    event.preventDefault();
  
    $("#firstpage").hide();
    $("#secondpage").hide();
    $("#thirdpage").show();
  
    var id = $(this).data("id");
    console.log("update entry id: ", id);
  
    $.get("/api/entry/" + id).then(function (data) {
      $("#email-update").val(data.email);
      $("#dest-update").val(data.destination);
      $("#act-update").val(data.attractions);
      $("#rest-update").val(data.activities);
      $("#attr-update").val(data.restaurants);
      $("#update-changes").data("id", data.id);
    })
  }); //deleteEntry button ends here
  
  
  $("#update-changes").on("click", function (event) {
    event.preventDefault();
  
    $("#firstpage").hide();
    $("#secondpage").hide();
  
    var id = $(this).data("id");
    console.log("update-changes id: ", id);
     
      var updatedinfo = {
      email: $("#email-update").val().trim(),
      destination: $("#dest-update").val().trim(),
      attractions: $("#act-update").val().trim(),
      activities: $("#rest-update").val().trim(),
      restaurants: $("#attr-update").val().trim(),
      id: id
    };//var updatedinfo ends here
    
    $.ajax({
      method: "PUT",
      url: "/api/update",
      data: updatedinfo
    }).then(function (data) {
      console.log("--------------------------------------");
      console.log("AFTER UPDAING : ", data);        
    });
  
    // $.post("/api/new", updatedinfo)
    //   .then(function (results) {
    //     console.log("updated RESULTS: ", results);
        
      
    //    }); //$.post ends here.   
  
    //Empty each input box by replacing the value with an empty string
    $("#email-update").val("");
    $("#dest-update").val("");
    $("#act-update").val("");
    $("#rest-update").val("");
    $("#attr-update").val("");
  
  }); //submit button ends here.
  
  });//document ready function ends here.
  
  

  
