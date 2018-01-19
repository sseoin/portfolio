(function ($) {
  SH.ProjectPairView = Backbone.View.extend({
    template: _.template($("#project-pair-template").html()),
    tagName: "div",
    className: "photo-section",

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.checkIfShow();
      $(document).on("scroll", _.throttle(_.bind(function () {
        this.checkIfShow();
      }, this), 600));
      return this;
    },

    checkIfShow: function () {
      if(($(document).scrollTop() + $(window).height()) >= this.$el.position().top){
        this.$el.addClass("visible");
      }
      if(($(document).scrollTop() + $(window).height() / 2) >= this.$el.position().top){
        this.$(".photo-info").addClass("visible");
      }
    }
  });
} (jQuery));