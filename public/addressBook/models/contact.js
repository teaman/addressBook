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

    requestSave: function(data){
      console.log(data)
      console.log(data.id);
      if(data.id){
        return this.put('/' + data.id, data);
      }else{
        return this.post('', data, {jsonBody: true});
      }
      
    },

    requestDelete: function(id){
      return this.del('/' + id);
    }

  });

  return Contact;
});