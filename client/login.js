let user = "Engage";
let admin = "Microsoft";

function validate() {
  var username = document.getElementById("username").Value;
  var password = document.getElementById("password").Value;
  if (username == admin && password == user) {
    alert("login sucessfully");
  } else {
    alert("worng email or password");
  }
}
