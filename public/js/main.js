//from author.js activity 13
$(document).ready(function() {
    var emailInput = $("#email");






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
      $(".drawing-result").append(<h1>Congratulation, you won bruv</h1>)
      
  }

  else{

  }
});
});
