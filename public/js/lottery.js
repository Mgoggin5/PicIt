$(".btn btn-default").on("click", "#random-button", function() {
    var userLottoNum = "";
    var systemLottoNum = "6";

    for (var i = 0; i < 9; i++) {
        var random = Math.floor(Math.random() * 10) + 1;
        userLottoNum = random + userLottoNum;
        }

    console.log(userLottoNum);

    if(userLottoNum===systemLottoNum){
        $(<h1>Congratulation, you won bruv</h1>)
    }

    else{

    }
});


//     $(".btn btn-default").on("click", "#random-button", function() {

//       // Create a string which will hold the lottery number
//       var lottoNumber = "";

//       // Then initiate a loop to generate 9 separate numbers
//       for (var i = 0; i < 9; i++) {

//         // For each iteration, generate a new random number between 1 and 6 million.
//         var random = Math.floor(Math.random() * 6000000) + 1;

//         // Take this number and then add it to the rest of the string.
//         // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
//         lottoNumber = random + lottoNumber;

//       }

//       // ... and then dump the random number into our random-number d

//       if (lottoNumber === userKey){
//           $(<h1>You Won! Congratulations!</h1>)
//           $(<h2>More information will be emailed to you in a few minutes.</h2>)
//           $(<h3>If you are not automatically redirected to homepage click here</h3>)
//       }

//     });

//   });