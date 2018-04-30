//from author.js activity 13
$(document).ready(function() {

  $(function () {

    $("#lotto").on('click', function (event) {

      var email = $("#email").val().trim();

      localStorage.setItem("email", email);
    });

  });
 

  //   var emailInput = $("#email");

  //   $(document).on("submit", "#author-form", handleAuthorFormSubmit);// from author.js

  //   // Getting the initial list of Authors
  //   getAuthors();

  //   // A function to handle what happens when the form is submitted to create a new Author
  // function handleAuthorFormSubmit(event) {
  //   event.preventDefault();
  //   // Don't do anything if the name fields hasn't been filled out
  //   if (!nameInput.val().trim().trim()) {
  //     return;
  //   }
  //   // Calling the upsertAuthor function and passing in the value of the name input
  //   upsertAuthor({
  //     name: nameInput
  //       .val()
  //       .trim()
  //   });
  // }




// INSERT LOTTO FUNCTION CODE 
$(".btn btn-default").on("click", "#random-button", function() {
  var userLottoNum = "";
  var systemLottoNum = "6";

  


  for (var i = 0; i < 9; i++) {
      var random = Math.floor(Math.random() * 10) + 1;
      userLottoNum = random + userLottoNum;
      }

  console.log(userLottoNum);

  if(userLottoNum===systemLottoNum){
      $(".drawing-result").append("<h1>Congratulation, you won bruv</h1>")
      
  }

  else{

  }
});


});