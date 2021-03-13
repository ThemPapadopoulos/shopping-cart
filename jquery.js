//? recover on refresh from localstorage
$(document).ready(() => {
  var recover = localStorage.getItem("value");
  var cartNum = localStorage.getItem("items");

  $("ol").append(recover);
  $("#itemNum").append(cartNum);
  $("#itemNum").animate({ height: "toggle" }); //? icon animation
});
//?

//? toggle cart appearance
$("img").click(() => $("div").toggle(800));
$("#collapse").click(() => $("div").toggle(800));
//?

$("#complete").click(() => {
  var itemN = $("li").length + 1; //? count list items

  $("ol").append(
    "<li>Appended item             <button class='delete'>x</button></li>"
  ); //?add li on button click

  //? button delete line

  delBtn = document.querySelectorAll(".delete");
  for (i = 0; i < delBtn.length; i++) {
    delBtn[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }

  console.log(delBtn.length);

  //? save on local storage
  document.querySelector("#itemNum").innerHTML = itemN;
  var saved = document.querySelector("ol").innerHTML;
  localStorage.setItem("value", saved);
  localStorage.setItem("items", itemN);
});
//?

//? button click -clear local storage
$("#deleteCart").click(() => {
  localStorage.value = "";
  localStorage.items = "";
  location.reload();
});
