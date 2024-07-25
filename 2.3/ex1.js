
window.onload = function() {
  // 获取元素
  var oDivOne = document.getElementById("divOne");
  var osApple = document.getElementsByClassName("apple");
  var osSpan = document.getElementsByTagName("span");

  // 操作元素
  oDivOne.textContent = "this is added.(oDivOne)";
  osApple[0].textContent = "this is added.(osApple)"
  osSpan[1].style.color = "red";
}