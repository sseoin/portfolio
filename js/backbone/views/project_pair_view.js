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
      $(document).on("scroll." + this.cid, _.throttle(_.bind(function () {
        this.checkIfShow();
      }, this), 300));
      this.checkIfShow();
      return this;
    },

    checkIfShow: function () {
      if(($(document).scrollTop() + $(window).height()) >= this.$el.position().top){
        $(document).off("scroll." + this.cid);
        this.$el.addClass("visible");
      }
    },

    browseToPage: function (event) {
      event.stopPropagation();
      event.preventDefault();
      var target = $(event.currentTarget);
      var pageId = target.data("page-id");
      SH.browseTo(pageId);
    },

    remove: function () {
      $(document).off("scroll." + this.cid);
      return Backbone.View.prototype.remove.call(this);
    }
  });
} (jQuery));