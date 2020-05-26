$(document).ready(function () {
  $("#about-center-left-2").submit(function (event) {
    event.preventDefault();
    // BƯỚC 1: Lấy dữ liệu từ form
    var username = $.trim($("#name").val());
    var password = $.trim($("#password").val());
    var email = $.trim($("#email").val());

    // BƯỚC 2: Validate dữ liệu
    // Biến cờ hiệu
    var flag = true;

    // Username
    if (username == "" || username == null) {
      $("#errorname").text("Name can't be blank");
      flag = false;
    } else {
      $("#errorname").text("");
    }
    // Email
    if (!isEmail(email)) {
      $("#erroremail").text("Please enter a valid e-mail address.");
      flag = false;
    } else {
      $("#erroremail").text("");
    }
    // Password
    if (password.length < 8) {
      $("#errorpassword").text("Password must be at least 8 characters long.");
      flag = false;
    } else {
      $("#errorpassword").text("");
    }
    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
    return flag;
  });
});
$(document).ready(function () {
  $(".about-center-left-241").click(function () {
    $(".about-center-left-241").hide();
    var username = $("#name").val();
    var password = $("#password").val();
    var email = $("#email").val();
    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
    if (
      username == "" ||
      password == "" ||
      password.length < 8 ||
      !isEmail(email)
    ) {
      $(".about-center-left-241").show();
    } else {
      $.ajax({
        url: "http://localhost:3001/api/login",
        type: "post",
        data: { username: username, password: password },
        success: function (data) {
          window.location = "header.html";
        },
        error: function (data) {
          $("#message").text("Invalid Username or Password! Try again.");
          $(".about-center-left-241").show();
        },
      });
    }
  });
});
