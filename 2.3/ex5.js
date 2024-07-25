window.onload = function() {
  var oEl = document.getElementById("el");

  oEl.onclick = function() {
    alert("you click this div");
  }

  oEl.onmouseover = function() {
    oEl.textContent = "鼠标已移入";
  }

  oEl.onmouseout = function() {
    oEl.textContent = "鼠标已移出";
  }
  /*
  onclick	    鼠标单击事件
  onmouseover	鼠标移入事件
  onmouseout	鼠标移出事件
  onmousedown	鼠标按下事件
  onmouseup	  鼠标松开事件
  onmousemove	鼠标移动事件
  */
}