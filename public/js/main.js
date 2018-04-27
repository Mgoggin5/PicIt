$(document).ready(function () {
  $(function () {

    $("#raffle").on('click', function (event) {

      var email = $("#email").val().trim();

      localStorage.setItem("email", email);
    });
  })
});