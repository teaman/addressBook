define([
  'vertebrae',
  './header/header.controller',
  'handlebars',
  'underscore',
  './templates'
], function(
  Vertebrae,
  HeaderController,
  Handlebars,
  _,
  HandlebarTemplates
) {
  
  Vertebrae.View.setupTemplates(HandlebarTemplates);

  _.each(HandlebarTemplates, function(fn, name) {
    Handlebars.registerPartial(name, fn);
  });

  var AddressBook = Vertebrae.App.extend({

    AppName: 'AddressBook',
    AppTitle: 'Address Book Example',

    content: '#content',
    
    defaultRoute: 'contact/list/',

    template: 'app.init',

    routes: {
      'contact/list/'       : 'app/contact/contact.list.controller',
      'contact/detail/:id'  : 'app/contact/contact.detail.controller',
      'contact/detail/'     : 'app/contact/contact.detail.controller'
    },

    controllers: {
      'header #header': HeaderController
    },

    initialize: function() {
      this._super.apply(this, arguments);
      window.App = this;
    },

    navigateContactList: function(options){
      var url = 'contact/list/';
      return this.navigate(url, options);
    },

    navigateContactForm: function(id, options){
      var url = 'contact/detail/' + id;
      return this.navigate(url, options);
    }

  });

  return AddressBook;
});