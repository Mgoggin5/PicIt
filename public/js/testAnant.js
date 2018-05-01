// $(document).ready(function() {
    $("#loggedemail").html(localStorage.getItem("email"));

    // console.log("email")
    
    // var formFields = {
    //   email: $("#emailadd"),
    //   destination: $("#destInput"),
    //   attractions: $("#attrInput"),
    //   activities: $("#actiInput"),
    //   restaurants: $("#restInput"),
    // };
    
    // formFields.destination.val(test.destination);
    
    //working code for last record.
    $("#submit-btn").on("click", function (event) {
      event.preventDefault();
    
      // Make a destination object
    
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
          console.log("First submit RESULTS: ", results);
          $.ajax({
            method: "GET",
            url: "/api/entry"
          }).then(function (data) {
            console.log("*********************");
            console.log("First ajax request: ", data);
            showtravelinfo(data);
          });
    
          function showtravelinfo(dbtravelinfo) {
            $("#entry").empty();
            var argv;
            for (let i = 0; i < dbtravelinfo.length; i++) {
              arvg = dbtravelinfo[dbtravelinfo.length - 1];
            }
            // console.log("showtraveelinfo() dbtravelinfo.length: ", arvg);              
            // return argv;
            addOneEntry(arvg);
          } //showtravelinfo() ends here.        
    
          function addOneEntry(data) {
            // console.log("addOneEntry () argv: ", data);
            var newEntryElement = $("<div>");
            newEntryElement.addClass("entryclass");
            // newEntryElement.append(`<p>id: ${userEntry.id}</p>`);
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
    
      var id = $(this).data("id");
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
      var id = $(this).data("id");
      $.get("/api/entry/" + id).then(function (data) {
        $("#email-update").val(data.email);
        $("#dest-update").val(data.destination);
        $("#act-update").val(data.attractions);
        $("#rest-update").val(data.activities);
        $("#attr-update").val(data.restaurants);
      })
    
    
    
      //   // var id = $(this).data("id");
      //   // $.ajax({
      //   //   method: "update",
      //   //   url: "/api/update/" + id
      //   // }).then(function (data) {
      //   //   console.log("delete data: ", data);  
    
      //   // });
    
      //   // $("#update").empty();
    }); //deleteEntry button ends here
    
    
    $("#update-changes").on("click", function (event) {
      event.preventDefault();
    
      var id = $(this).data("id");
    
      var updatedinfo = {
        email: $("#email-update").val().trim(),
        destination: $("#dest-update").val().trim(),
        attractions: $("#act-update").val().trim(),
        activities: $("#rest-update").val().trim(),
        restaurants: $("#attr-update").val().trim()
      };
    
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
      $("#emailadd").val("");
      $("#destInput").val("");
      $("#attrInput").val("");
      $("#actiInput").val("");
      $("#restInput").val("");
    
    }); //submit button ends here.
    
    