var projectView = new SH.ProjectPairView({
  model: new SH.ProjectPair({
    firstImgUrl: "images/mc.png",
    secondImgUrl: "images/Contact-us-ipad.png",
    firstImgOverlayText: "First Overlay Text",
    secondImgOverlayText: "Second Overlay Text",
    firstImgOverlayDescription: "Description",
    secondImgOverlayDescription: "Description"
  })
});
projectView.$el.appendTo("#main-div");
var projectView2 = new SH.ProjectPairView({
  model: new SH.ProjectPair({
    firstImgUrl: "images/LC.png",
    secondImgUrl: "images/mc-2.png",
    firstImgOverlayText: "Third Overlay Text",
    secondImgOverlayText: "Fourth Overlay Text",
    firstImgOverlayDescription: "Description",
    secondImgOverlayDescription: "Description"
  })
});
projectView2.$el.appendTo("#main-div");
var projectView3 = new SH.ProjectPairView({
  model: new SH.ProjectPair({
    firstImgUrl: "images/mc.png",
    secondImgUrl: "images/Contact-us-ipad.png",
    firstImgOverlayText: "Fifth Overlay Text",
    secondImgOverlayText: "Sixth Overlay Text",
    firstImgOverlayDescription: "Description",
    secondImgOverlayDescription: "Description"
  })
});
projectView3.$el.appendTo("#main-div");

var allViews = [projectView, projectView2, projectView3];
var numToShow = Math.ceil($(window).height() / 450);
var viewsToShow = allViews.slice(0, numToShow);
var viewsToHide = allViews.slice(numToShow);

var timeout = 0;
_.each(viewsToShow, function (view) {
  setTimeout(function () {
    view.render();
  }, timeout);
  timeout = timeout + 300;
});

setTimeout(function () {
  _.each(viewsToHide, function (view) {
    view.render();
  });
}, timeout);