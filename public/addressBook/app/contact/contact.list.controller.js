define([
  'vertebrae',
  '../abstract/abstract.controller',
  './contact.list.view',
  'models/contact'
], function(Vertebrae, AbstractController, ContactListView, Contact) {
  
  var ContactListController = AbstractController.extend({
    
  name: 'contactList',

  view: ContactListView,

  properties: [
    'contacts',
    'columns'
  ],

  events: {
    'view:ready': null,
    'data:ready': 'render'
  },

  columns: [
    {title: 'First Name'},
    {title: 'Last Name'},
    {title: 'Email'},
    {title: 'Phone'},
    {title: 'Address'},
    {title: 'City'},
    {title: 'State'},
    {title: 'Zip Code'},
    {title: ''}
  ],

  getTemplateProperties: function(){
    return{
      columns: this.getColumns(),
      contacts: this.getContacts()
    };
  }, 

  start: function(){
    var view = this.getView();
    return Contact.requestAll()
    .bind(this)
    .then(function(contacts){
      this.setContacts(contacts);
    });
  },

  showEditContactForm: function(id){
    this.getAppController().navigateContactForm(id, {trigger: true});
  },

  showNewContactForm: function(){
    this.getAppController().navigateContactForm('',{trigger: true});
  },

  deleteContact: function(id){
    if(confirm('Are you sure you want to delete this contact?')){
      console.log('Delete Contact: ' + id);
    }
  },

  refreshList: function(){
    // todo: need to refresh the list
  }

});
 
  return ContactListController;
});