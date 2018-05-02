// function renderDestination(data) {
//   if (data.length !== 0) {

//     $("#stats").empty();
//     $("#stats").show();

//     for (var i = 0; i < data.length; i++) {

//       var div = $("<div>");

//       div.append("<h2>" + data[i].destination + "</h2>");
//       div.append("<p>Act: " + data[i].actiInput + "</p>");
//       div.append("<p>Rest: " + data[i].restInput + "</p>");
//       div.append("<p>Attr: " + data[i].attrInput + "</p>");

//       $("#stats").append(div);

//     }
//   }   
// }

// function renderDestination(data) {
//   if (data.length !== 0) {

//     $("#stats").empty();
//     $("#stats").show();

//     for (var i = 0; i < data.length; i++) {

//       var div = $("<div>");

//       div.append("<h2>" + data[i].destination + "</h2>");
//       div.append("<p>Act: " + data[i].actiInput + "</p>");
//       div.append("<p>Rest: " + data[i].restInput + "</p>");
//       div.append("<p>Attr: " + data[i].attrInput + "</p>");

//       $("#stats").append(div);



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
        button3.addClass("btn btn-default btn-xs rest");
        // div.append(p)
        // button.attr("data", "rest1")
        button.append("Destination");
        button2.append("Fun");
        button3.append("Food");
        div.append("<h2>" + data[i].destination + "</h2>");
        div.append("<p>Activities: " + data[i].activities + "</p>");
        div.append("<p>Restuarants: " + data[i].restaurants + "</p>");

        div.append("<p>Attractions: " + data[i].attractions + "</p>");
        div.append("<button class='delete' data-id='" + data[i].id + "'>delete</button><br>");
        btnDiv.append(button);
        btnDiv.append(button2);
        btnDiv.append(button3);
        div.append(btnDiv)
        $("#stats").append(div);

      };
    };

    $(document).on("click", ".dest", function () {
      var buttonData = $(this).attr('data-name');
      var zomURL = "https://api.foursquare.com/v2/venues/search?client_id=NELSJRC1FWDIY1SJAC1QIRBMZKREWGTEC3CJFAKDM1OPTNPV&client_secret=Y51IZLSLUJIWDSIBGOAMGK2ON3KIUPSQNHMKAQPCI3M11CHR&v=20180501&near=";

      $.ajax({
        url: zomURL + buttonData,
        method: "GET"
      }).then(function (results) {
        var results = results.response.venues
        var div = $("<div>");
        var p = $("<p>");

        for (var i = 0; i < 1; i++) {
          if (results[i].location.formattedAddress[i] === undefined) {
            undefined = ""
          }
          var div = $("<div>");
          var p = $("<p>");
          div.addClass("item active");
          var address = results[i].location.formattedAddress[i];
          p.attr('src', address);
          div.append(p)
          $(".carousel-inner").append(div);
        };

        for (var i = 0; i < 10; i++) {
          if (results[i].location.formattedAddress[i] === undefined) {
            undefined = ""
          }
          div.addClass("item");
          var address = results[i].location.formattedAddress[i];
          // var count = response.length ++;
          // div.attr('id', 'img'+ count)
          console.log("this is one" + results[i].location.formattedAddress[i])
          p.text("address")
          div.append(p)
          $().append(div);
           };
      }
      )
    });
  })
})

//       $(document).on('click', ".dest", function (event) {
//         event.preventDefault();
//         var queryURL = "https://api.unsplash.com/search/collections/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query=" ;

//         var buttonData = $(this).attr('data-name').trim();

//         // event.preventDefault()
//         $.ajax({
//           url: queryURL + buttonData,
//           method: "GET"
//         }).then(function (response) {
//           console.log("############################",response);
//           var response = response.results

//           for (var i = 0; i < 1; i++) {
//             var div = $("<div>");
//             var img = $("<img>");
//             div.addClass("item active");
//             var image = response[i].urls.regular;
//             img.attr('src', image);
//             div.append(img)
//             $(".carousel-inner").append(div);
// console.log('this is the button ' + buttonData)
//           };

//           for (var i = 0; i < response.length; i++) {

//             var div = $("<div>");
//             var img = $("<img>");
//             div.addClass("item");
//             var image = response[i].urls.regular;
//             // var count = response.length ++;
//             // div.attr('id', 'img'+ count)

//             img.attr('src', image)

//             $(".carousel-inner").append(div);
//             div.append(img)
//             console.log("this is one" + response[i])
//           }
//           console.log("what" + response);
//           $("#myModal").modal("show");

//         }

//         )

//       });
//   })
// })
 // destination compvare


      // $(document).on("click", ".attract", function (event) {
      //   event.preventDefault();
      //   var buttonData = $(this).attr('data-attr')
      //   var attractURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query=";
      //   console.log(buttonData + " for attr")
      //   $.ajax({
      //     url: attractURL + buttonData,
      //     method: "GET"
      //   }).then(function (response) {

      //     var response = response.results

      //     for (var i = 0; i < 1; i++) {
      //       var div = $("<div>");
      //       var img = $("<img>");
      //       div.addClass("item active");
      //       var image = response[i].urls.regular;
      //       img.attr('src', image);
      //       div.append(img)
      //       $(".carousel-inner").append(div);

      //     };

      //     for (var i = 0; i < response.length; i++) {

      //       var div = $("<div>");
      //       var img = $("<img>");
      //       div.addClass("item");
      //       var image = response[i].urls.regular;

      //       img.attr('src', image)

      //       $(".carousel-inner").append(div);
      //       div.append(img)
      //       console.log("this is one" + response[i])
      //     }
      //     console.log("what" + response)
      //     $("#myModal").modal("show");

      //   }
      //   )

      // }

      // );


      // $(document).on("click", ".rest", function (event) {
      //   event.preventDefault()
      //   var buttonData = $(this).attr('data-rest');
      //   var restURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query=";

      //   // event.preventDefault(event)
      //   $.ajax({
      //     url: restURL + buttonData,
      //     method: "GET"
      //   }).then(function (response) {

      //     var response = response.results

      //     for (var i = 0; i < 1; i++) {
      //       var div = $("<div>");
      //       var img = $("<img>");
      //       div.addClass("item active");
      //       var image = response[i].urls.regular;
      //       img.attr('src', image);
      //       div.append(img)
      //       $(".carousel-inner").append(div);

      //     };

      //     for (var i = 0; i < response.length; i++) {

      //       var div = $("<div>");
      //       var img = $("<img>");
      //       div.addClass("item");
      //       var image = response[i].urls.regular;


      //       img.attr('src', image)

      //       $(".carousel-inner").append(div);
      //       div.append(img)
      //       console.log("this is one" + response[i])
      //     }
      //     console.log("what" + response)
      //     $("#myModal").modal("show");

      //   }
      //   )

      // }

      // );



      // var actURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query=" ;

      // $(document).on("click", ".activities", function (event) {
      //   // event.preventDefault()
      //   $.ajax({
      //     url: actURL,
      //     method: "GET"
      //   }).then(function (response) {

      //     var response = response.results

      //     for (var i = 0; i < 1; i++) {
      //       var div = $("<div>");
      //       var img = $("<img>");
      //       div.addClass("item active");
      //       var image = response[i].urls.regular;
      //       img.attr('src', image);
      //       div.append(img)
      //       $(".carousel-inner").append(div);

      //     };

      //     for (var i = 0; i < response.length; i++) {

      //       var div = $("<div>");
      //       var img = $("<img>");
      //       div.addClass("item");
      //       var image = response[i].urls.regular;
      //       // var count = response.length ++;
      //       // div.attr('id', 'img'+ count)

      //       img.attr('src', image)

      //       $(".carousel-inner").append(div);
      //       div.append(img)
      //       console.log("this is one" + response[i])
      //     }

      //     $("#myModal").modal("show");

      //   }

      //   )

      // }

      // )



  // })
    // }
  // }
// })



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
// $(".delete").click(function () {

//   var info = {
//     id: $(this).attr("data-id")
//   };

//   $.post("/api/delete", info)

//     .then(function (delData) {

//       console.log(delData);
//       console.log("deleted Successfully!");
//     });

//   $(this).closest("div").remove();

// });



// $("#search-btn").on("click", function(event) {
//   event.preventDefault();

//   // Save the book they typed into the book-search input
//   var destinationSearched = $("#destination-search").val().trim();

//   // Make an AJAX get request to our api, including the user's book in the url
//   $.get("/api/entry" + destinationSearched, function(data) {

//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderDestination(data);

//   });

// })