define([
  'vertebrae',
  '../abstract/abstract.controller',
  './contact.detail.view',
  'models/contact',
  'models/state'
], function(Vertebrae, AbstractController, ContactDetailView, Contact, State) {
 
  var ContactDetailController = AbstractController.extend({
    
    name: 'contactDetail',

    view: ContactDetailView,

	events: {
		'view:ready': null,
		'data:ready': 'render',
		'view:available': 'viewAvaliable'
	},

	properties:[
		'contact',
		'states'
	],

	start: function(id){
		// todo: need to handle ids better here and not have a
		// if statement to chack for the id of null

		State.requestAll()
		.bind(this)
		.then(function(states){
			this.setStates(states);
		});

		if(id){
			return Contact.requestOne(id)
		    .bind(this)
		    .then(function(contact){
		      this.setContact(contact);
		      this._changeContactName(contact.firstName);
		    });
		}
	},

	viewAvaliable: function(){
		var contact = this.getContact();
			saveButt = $('.save-butt');
		if(contact){
			this._changeContactName(contact.fullName);
			saveButt.prop('disabled', false);
		}
	},

	getTemplateProperties: function(){
		return{
		  contact: this.getContact(),
		  states: this.getStates()
		};
	},

	_changeContactName: function(title){
		$('.contact-name').html(title);
	},

	showContactList: function(){
		this.getAppController().navigateContactList({trigger: true});
	}

  });
 
  return ContactDetailController;
});