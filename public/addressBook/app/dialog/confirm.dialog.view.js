define([
  'vertebrae'
], function(Vertebrae) {
 
  var ConfirmView = Vertebrae.View.extend({

    templates: {
      'confirm.dialog' : 'renderContent'
    },

    render: function() {
      this.$el.html(this.renderContent());
    }

  });
 
  return ConfirmView;
});
