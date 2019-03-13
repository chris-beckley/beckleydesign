function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar-list") {
    x.className += " responsive";
  } else {
    x.className = "navbar-list";
  }
}
