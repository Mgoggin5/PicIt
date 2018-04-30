

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
         
          .then(function(delData) {

            console.log(delData);
            console.log("Deleted Successfully!");
          });
  
        $(this).closest("div").remove();
  
      });
    }
  }


    $("#destination").on('click', function (event){

      event.preventDefault();
      var queryURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query=louvre";
      
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){

        var response = response.results

        for (let i = 0; i < 1; i++) {
          var div = $("<div>");
          var img = $("<img>");
          div.addClass("item active");
          var image = response[i].urls.regular;
          img.attr('src', image);
          div.append(img)
          $(".carousel-inner").append(div);
         
        };

        for (var i = 0; i < response.length; i++) {
 
          var div = $("<div>");
          var img = $("<img>");
          div.addClass("item");
          var image = response[i].urls.regular;
          img.attr('src', image)

          $(".carousel-inner").append(div);
          div.append(img)
          console.log("this is one" + response[9].urls.regular)
        }
        console.log("what" + response)
        $("#myModal").modal("show");

      }
    )
      
    })
  //   $("#restaurants").on("click", function () {
  //     var queryURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query="+data[i].restaurants;
  //     $.ajax({
  //       url: queryURL,
  //       method: "GET"
  //     }).then(function(response){
  //       console.log(response);
  //       response = response.results
  
  //       for (var i = 0; i < response.length; i++) {
  //         var img = $("<img>");
  //         var image = response[i].urls.full;
  //         img.attr('src', image)
  //         // img.append(response[i].urls.full);
          
  //         $(".modal").append(img)
          
  //       }
  //     })
         
  //   }

  // )
//   ("#restaurants").on("click", function () {
//     var queryURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query="+ data[i].restaurants;
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response){
//       console.log(response);
//       response = response.results

//       for (var i = 0; i < response.length; i++) {
//         var img = $("<img>");

//         img.append(response[i].urls.small);
        
//         $(".modal").append(img)
        
//       }
//     })
       
//   }
  
// )
// ("#attractions").on("click", function () {
//   var queryURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query="+data[i].attractions;
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response){
//     console.log(response);
//     response = response.results

//     for (var i = 0; i < response.length; i++) {
//       var img = $("<img>");

//       img.append(response[i].urls.small);
      
//       $(".modal").append(img)
      
//     }
//   })
     
// }

// )
   
//   }
})

