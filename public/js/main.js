$(document).ready(function () {
$(function(){
    $("#lotto").on("click", function(){
        var email = $("#email").val().trim();
        localStorage.setItem("email, email")
    })
});

// INSERT LOTTO FUNCTION CODE 
$("#lotto").on("click", function() {
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
