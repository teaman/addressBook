define([
  'vertebrae' 
], function(Vertebrae) {

  var HeaderView = Vertebrae.View.extend({

    templates: {
      header: 'renderContent'
    },

    setCurrentPage: function(page) {
      this.$('.current-page').text(page);
    },

    render: function() {
      var delegate = this.getDelegate();

      this.$el.html(this.renderContent());
    },

  });

  return HeaderView;
});