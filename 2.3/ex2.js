window.onload = function() {
  // var osInput = this.document.getElementsByTagName("input");
  var osInput = this.document.getElementsByName("fruit");
  for(var i=0; i<osInput.length; i++) {
    osInput[i].checked = true;
  }

  var oDivOne = this.document.getElementById("divOne");
  var oSpan = this.document.createElement("span");
  // var oTxt = this.document.createTextNode("spanContent");

  // oSpan.appendChild(oTxt);
  oSpan.textContent = "spanContent";
  oDivOne.appendChild(oSpan);
}