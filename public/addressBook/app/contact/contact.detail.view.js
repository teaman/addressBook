define([
  'vertebrae'
], function(Vertebrae) {
 
  var ContactDetailView = Vertebrae.View.extend({

    templates: {
      'contact.detail' : 'renderContent'
    },

    events:{
      'click .save-butt' : 'handleSaveButt',
      'click .cancel-butt': 'handleCancelButt'
    },

    render: function() {
      var data = this.getDelegate().getTemplateProperties();
      this.$el.html(this.renderContent(data));
    },

    handleCancelButt: function(evt){
      evt.preventDefault();
      this.getDelegate().showContactList();
    }

  });
 
  return ContactDetailView;
});