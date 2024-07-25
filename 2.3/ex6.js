window.onload = function() {
  var oInput = document.getElementById("word");
  var oDiv = document.getElementById("num");
  var oFocus = document.getElementById("isFocus");

  oInput.onkeydown = function() {
    oDiv.textContent = oInput.value.length;
  }

  oInput.onfocus = function() {
    oFocus.textContent = "已对焦";
  }

  oInput.onblur = function() {
    oFocus.textContent = "已失焦";
  }

  oInput.onselect = function() {
    oFocus.textContent = "选中ing";
  }

  oDiv.onclick = function() {
    oInput.select();
  }

  oFocus.onclick = function() {
    oInput.focus();
  }

  //onchange
}