window.onload = function() {
  var oImg = document.createElement("img");
  oImg.className = "pic";
  oImg.src = "../2.1/photo/R-C.jpg";
  oImg.style.border = "5px solid silver";

  var oDivOne = document.getElementById("divOne");
  oDivOne.appendChild(oImg);
}