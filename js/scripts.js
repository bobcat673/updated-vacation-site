window.onload = function() {
  let body = document.querySelector("body")
  let jumbotron = document.getElementById("jumbotron")
  document.getElementById("light").onclick = function() {
    body.style.color = "black";
    body.style.backgroundColor = "white";
    jumbotron.style.color = "black";
    jumbotron.style.backgroundColor = "white";
  };
  document.getElementById("dark").onclick = function() {
    body.style.color = "white";
    body.style.backgroundColor = "black";
    jumbotron.style.color = "white";
    jumbotron.style.backgroundColor = "black";
  };
  document.getElementById("fontLarge").onclick = function() {
    body.style.fontSize = "x-large";
    jumbotron.style.fontSize = "x-large";
  };
  document.getElementById("fontSmall").onclick = function() {
    body.style.fontSize = "medium";
    jumbotron.style.fontSize = "medium";
  };
};