define([
  'vertebrae' 
], function(Vertebrae) {

  var AbstractController = Vertebrae.Controller.extend({

    properties: [
      'appController',
    ],

    initialize: function(appController) {
      this._super();
      this.appController = appController;
    }

  });

  return AbstractController;
});