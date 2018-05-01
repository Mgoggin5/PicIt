

$(document).ready(function () {

  $.get("/api/entry").then(function (data) {

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
        // btnDiv.addClass("btn-group-vertical");
        // btnDiv.attr("role", 'group');
        button.addClass("btn btn-default btn-xs dest");
        button2.addClass("btn btn-default btn-xs attract");
        button3.addClass("btn btn-default btn-xs activities");
        button.attr("data", "rest1")
        button.append("Restaurant");
        button2.append("Fun");
        button3.append("Features");
        div.append("<h2>" + data[i].destination + "</h2>");
        div.append("<p>Activities: " + data[i].activities + "</p>");
        div.append("<p>:Restuarants " + data[i].restaurants + "</p>");

        div.append("<p>Attractions: " + data[i].attractions + "</p>");
        div.append("<button class='delete' data-id='" + data[i].id + "'>delete</button><br>");
        btnDiv.append(button);
        btnDiv.append(button2);
        btnDiv.append(button3);
        div.append(btnDiv)
        $("#stats").append(div);
        console.log(data)
      }



      $(document).on('click', ".dest", function (event) {
        var queryURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query=";
        var buttonData = $(this).attr("rest1")
        // event.preventDefault()
        $.ajax({
          url: queryURL + buttonData,
          method: "GET"
        }).then(function (response) {

          var response = response.results

          for (var i = 0; i < 1; i++) {
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
            // var count = response.length ++;
            // div.attr('id', 'img'+ count)

            img.attr('src', image)

            $(".carousel-inner").append(div);
            div.append(img)
            console.log("this is one" + response[i])
          }
          console.log("what" + response);
          $("#myModal").modal("show");

        }

        )

      }); // destination compvare

      // var attractURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query=";
      // $(document).on("click", ".attract", function (event) {
      //   // event.preventDefault()
      //   $.ajax({
      //     url: attractURL,
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
      //     console.log("what" + response)
      //     $("#myModal").modal("show");

      //   }
      //   )

      // }

      // );
      // var restURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query=";

      // $(document).on("click", ".rest", function () {
      //   // event.preventDefault(event)
      //   $.ajax({
      //     url: restURL,
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
      //     console.log("what" + response)
      //     $("#myModal").modal("show");

      //   }
      //   )

      // }

      // );

      var actURL = "https://api.unsplash.com/search/photos/?client_id=b8f7f2f4ac00dd8ae064ceddfaf246ba4fa14b1fd11eed76d6e36bb5e4e43be6&query=" ;

      $(document).on("click", ".activities", function (event) {
        // event.preventDefault()
        $.ajax({
          url: actURL,
          method: "GET"
        }).then(function (response) {

          var response = response.results

          for (var i = 0; i < 1; i++) {
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
            // var count = response.length ++;
            // div.attr('id', 'img'+ count)

            img.attr('src', image)

            $(".carousel-inner").append(div);
            div.append(img)
            console.log("this is one" + response[i])
          }

          $("#myModal").modal("show");

        }

        )

      }

      )

    }

  })
})



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
$(".delete").click(function () {

  var info = {
    id: $(this).attr("data-id")
  };

  $.post("/api/delete", info)

    .then(function (delData) {

      console.log(delData);
      console.log("deleted Successfully!");
    });

  $(this).closest("div").remove();

});