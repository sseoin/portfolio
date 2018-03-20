$(document).ready(function () {
  $("a.navbar-brand").click(function (e) {
    e.preventDefault();
    SH.browseTo("index");
  });
  $(".nav-item").on("click", function (e) {
    e.preventDefault();
    var target = $(e.currentTarget);
    SH.browseTo(target.data("page"));
  });
});

window.addEventListener('popstate', function(e) {
  var state = e.state;
  if (!!state) {
    SH.browseTo(state);
  } else {
    SH.browseTo("index");   
  }
});

SH.browseTo = function (pageId) {
  var pageHtml = pageId + ".html";
  history.pushState(pageId, null, pageHtml);
  $("#main-div").fadeOut(function () {
    $("#main-div").empty().show();
    $.get(pageHtml, function (response) {
      var fragment = $(response).find("#main-div").html();
      var activeNav = $(response).find(".nav-item.active");
      if (activeNav) {
        var activePage = activeNav.data("page");
        $(".nav-item").removeClass("active");
        $(".nav-item[data-page='" + activePage + "']").addClass("active");
      }
      $("#main-div").html(fragment);
    });
  });
}