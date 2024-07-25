window.onload = function() {
  var osEl = document.getElementsByClassName("el");
  document.body.appendChild(osEl[0].cloneNode(true));

  var oHtml = document.getElementsByClassName("html")[0].cloneNode(true);
  var osCss = document.getElementsByClassName("css");
  for(var i=0; i<osCss.length; i++) {
    document.getElementById("unorderedList").replaceChild(oHtml, osCss[i]);
  }
}