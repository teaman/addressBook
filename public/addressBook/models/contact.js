define([
  'vertebrae' 
], function(Vertebrae) {

  var Contact = Vertebrae.Model.extend({

    properties:[
      'firstname',
      'lastname',
      'email',
      'phone',
      'address',
      'city',
      'state',
      'zipCode'
    ]
  },{

    rootURI: 'http://localhost:9001/contact',

    requestAll: function(){
      return this.get('/all');
    },

    requestOne: function(id){
      return this.get('/' + id);
    },

    requestCreate: function(data){
      return this.post('', data, {jsonBody: true});
    },

    requestUpdate: function(data){
      return this.put('/' + id, data);
    },

    requestDelete: function(id){
      return this.del('/' + id);
    }

  });

  return Contact;
});