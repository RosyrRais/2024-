window.onload = function() {
  var osFruit = document.getElementsByName("fruit");
  var oChoose = document.getElementById("choose");

  for(var i=0; i<3; i++) {
    osFruit[i].onchange = function() {
      if(this.checked) {
        oChoose.textContent = this.value;
      }
    }
  }

  document.body.oncopy = function() { //oncopy
    return false;
  }

  document.body.oncontextmenu = function() {
    return false;
  }
}

window.onbeforeunload = function(e) {
  e.returnValue = "bye";
}