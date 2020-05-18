function validateform(event) {
  event.preventDefault();
  var name = document.login.name.value;
  var password = document.login.password.value;
  var email = document.login.email.value;
  console.log("name:" + name);
  console.log("email:" + email);
  console.log("password:" + password);

  if (name == null || name == "") {
    document.getElementById("errorname").innerHTML = "Name can't be blank";
    document.getElementById("errorname").style.color = "#ef042f";
    return false;
  } else {
    document.getElementById("errorname").innerHTML = "";
  }
  var x = document.login.email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    document.getElementById("erroremail").innerHTML =
      "Please enter a valid e-mail address.";
    document.getElementById("erroremail").style.color = "#ef042f";
    return false;
  } else {
    document.getElementById("errorname").innerHTML = "";
  }
  if (password.length < 8) {
    document.getElementById("errorpassword").innerHTML =
      "Password must be at least 8 characters long.";
    document.getElementById("errorpassword").style.color = "#ef042f";
    return false;
  } else {
    document.getElementById("errorname").innerHTML = "";
  }
}
