$(document).ready(function () {
  $("#main-div").load("partials/work.html");
  $(".navbar-brand").click(function () {
    $("#main-div").load("partials/work.html");
  });
  $(".nav-item").click(function () {
    var page = $(this).data("page");
    $("#main-div").load("partials/" + page + ".html");
  });
});