$(document).ready(function () {
    $(function () {
        $("#raffle").on('click', function (event) {
            event.preventDefault()
            
                    // Store the username into localStorage using "localStorage.setItem"
        localStorage.setItem("name", username);

        // And display that name for the user using "localStorage.getItem"
        // $("#greeting").text(localStorage.getItem("name"));
            // var email = $("#email").val().trim();
            // var newEmail = { email: email }
            // $.ajax("/api/travelinfo/", {
            //     type: "POST",
            //     data: newEmail
            // }).then(function () {

            // })
            // console.log("Posted new email", newEmail)
            // localStorage.setItem('email', email);
            // $("#").
        });
    })

        // Store the username into localStorage using "localStorage.setItem"
        localStorage.setItem("name", username);

        // And display that name for the user using "localStorage.getItem"
        $("#greeting").text(localStorage.getItem("name"));
  
      });
  
      // By default (upon load) show the name stored in localStorage using "localStorage.getItem"
    //   $("#greeting").text(localStorage.getItem("name"));
   
    function getEmails() {
        $.get('/api/travelinfo', function (data) {
            var checkEmails = $("#email").val().trim();

            for (let i = 0; i < data.length; i++) {
                if (checkEmails === data.body.email) {
                    
                    
                }

            }
        })
    }
// need to go to api/:id with id so that when the other info is added it can be stored with the email.  Will do a get function to check if the email is already on file

