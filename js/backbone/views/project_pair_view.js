(function ($) {
  SH.ProjectPairView = Backbone.View.extend({
    template: _.template($("#project-pair-template").html()),
    tagName: "div",
    className: "photo-section",
    events: {
      "click a": "browseToPage"
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      $(document).on("scroll", _.throttle(_.bind(function () {
        this.checkIfShow();
      }, this), 300));
      this.checkIfShow();
      return this;
    },

    checkIfShow: function () {
      console.log($(document).scrollTop() + $(window).height() + ":" + this.$el.position().top);
      if(($(document).scrollTop() + $(window).height()) >= this.$el.position().top){
        this.$el.addClass("visible");
      }
    },

    browseToPage: function (event) {
      var target = $(event.currentTarget);
      var pageId = target.data("page-id");
      $("#main-div").load("partials/" + pageId + ".html");
    }
  });
} (jQuery));