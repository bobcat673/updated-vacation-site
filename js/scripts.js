window.onload = function() {
  colorMode = document.querySelector("body")
  jumbotron = document.getElementById("jumbotron")
  document.getElementById("light").onclick = function() {
    colorMode.style.color = "black";
    colorMode.style.backgroundColor = "white";
    jumbotron.style.color = "black";
    jumbotron.style.backgroundColor = "white";
  };
  document.getElementById("dark").onclick = function() {
    colorMode.style.color = "white";
    colorMode.style.backgroundColor = "black";
    jumbotron.style.color = "white";
    jumbotron.style.backgroundColor = "black";
  };
};