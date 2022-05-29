function validate() {
  let Name = document.getElementById("myname").Value;
  let Roll = document.getElementById("myroll").Value;
  let Email = document.getElementById("myemail").Value;
  let camera = document.getElementById("myimage").Value;
  if (Name != NaN && Roll != NaN && Email != NaN && camera != NaN) {
    alert("Your response has been Saved.");
  } else {
    alert("Complete the Details!!!");
  }
}
