(function ($) {
  SH.ProjectPair = Backbone.Model.extend({
    defaults: {
      firstImgUrl: "",
      secondImgUrl: "",
      firstImgOverlayText: "",
      secondImgOverlayText: ""
    }
  });
} (jQuery));