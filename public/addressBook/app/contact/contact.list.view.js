define([
  'vertebrae'
], function(Vertebrae) {
 
  var ContactListView = Vertebrae.View.extend({

    templates: {
      'contact.list' : 'renderContent'
    },

    render: function() {
      var data = this.getDelegate().getTemplateProperties();
      this.$el.html(this.renderContent(data));
    },

    // todo: show message on screen if no records are returned.
    showResultsMsg: function(hasResults){
      if(!hasResults){
        //show message on screen.
      }
    },

    events:{
      'click .create-butt' : 'handleCreateButt',
      'click .edit-butt'   : 'handleEditButt',
      'click .delete-butt' : 'handleDeleteButt'
    },

    handleCreateButt: function(evt){
      this.getDelegate().showNewContactForm();
    },

    handleEditButt: function(evt){
      var id = $(evt.currentTarget).data('id');
      this.getDelegate().showEditContactForm(id);
    },

    handleDeleteButt: function(evt){
      var id = $(evt.currentTarget).val();
      this.getDelegate().deleteContact(id);
    }
  });
 
  return ContactListView;
});