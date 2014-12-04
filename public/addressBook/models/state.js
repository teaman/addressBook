define([
  'vertebrae' 
], function(Vertebrae) {

  var Contact = Vertebrae.Model.extend({

    properties:[
      'state',
      'stateAbbr'
    ]
  },{

    rootURI: 'http://localhost:9001/state',

    requestAll: function(){
      return this.get('/all');
    }
  });

  return Contact;
});