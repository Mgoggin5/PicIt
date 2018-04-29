$(document).ready(function(){


  
  function renderDestination(data) {
    if (data.length !== 0) {
  
      $("#stats").empty();
      $("#stats").show();
  
      for (var i = 0; i < data.length; i++) {
  
        var div = $("<div>");
  
        div.append("<h2>" + data[i].title + "</h2>");
        div.append("<p>actiInput: " + data[i].actiInput + "</p>");
        div.append("<p>RestInput: " + data[i].RestInput + "</p>");
        div.append("<p>AttrInput: " + data[i].AttrInput + "</p>");
        div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE DESTINATION</button>");
        div.
        $("#stats").append(div);
  
      }
  
      $(".delete").click(function() {
  
        var info = {
          id: $(this).attr("data-id")
        };
  
        $.post("/api/delete", info)
          // On success, run the following code
          .then(function(delData) {
            // Log the data we found
            console.log(delData);
            console.log("Deleted Successfully!");
          });
  
        $(this).closest("div").remove();
  
      });
      getPhotos()
    }
  }

  function getPhotos(){
    var destination;

    var queryURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query="+data[i].title;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
      response = response.results

      for (var i = 0; i < response.length; i++) {
        
        
      }
    })
    
  }
})


https://api.unsplash.com/search/photos?page=1&query=office>; rel="first", 
<https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", 
<https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", <https://api.unsplash.com/