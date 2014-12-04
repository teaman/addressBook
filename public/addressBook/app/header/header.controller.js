define([
  '../abstract/abstract.controller',
  './header.view'
], function(AbstractController, HeaderView) {

  var HeaderController = AbstractController.extend({

    events: {
      'init': 'init'
    },

    view: HeaderView,

    init: function() {
      //listen for changes on the current controller property on the app
      // this will cause "refreshControllerPropertyOnView" to be called
      this.sync('controller', this.getAppController());
    },

    refreshControllerPropertyOnView: function(controller) {
      if (controller) {
        this.getView().setCurrentPage(controller.name);
      }
    }

  });

  return HeaderController;
});