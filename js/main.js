$(document).ready(function () {
  $("#main-div").load("partials/_work.html");
  $(".navbar-brand").click(function () {
    $("#main-div").load("partials/_work.html");
  });
  $(".nav-item").click(function () {
    var page = $(this).data("page");
    $("#main-div").load("partials/_" + page + ".html");
  });
});