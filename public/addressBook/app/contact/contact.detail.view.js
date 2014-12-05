define([
  'vertebrae',
  '../../../libs/viewHelpers'
], function(Vertebrae, ViewHelpers) {
 
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

    handleSaveButt: function(evt){
      var formData = this.$el.find('.form-control'),
          data = {};

      evt.preventDefault();
      data = ViewHelpers.formToJSON(formData);
      this.getDelegate().saveContact(data);
    },

    handleCancelButt: function(evt){
      evt.preventDefault();
      this.getDelegate().showContactList();
    }

  });
 
  return ContactDetailView;
});