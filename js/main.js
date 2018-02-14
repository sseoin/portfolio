$(document).ready(function () {
  $("a.navbar-brand").click(function (e) {
    e.preventDefault();
    SH.browseTo("index");
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
      $("#main-div").html(fragment);
    });
  });
}