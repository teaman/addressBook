define([
  'vertebrae',
  './confirm.dialog.view'
], function(Vertebrae, ConfirmDialogView) {
  
  var ConfirmDialogController = Vertebrae.Controller.extend({
    
  name: 'confirmDialogView',

  view: ConfirmDialogView,

  events: {

  }

});
 
  return ConfirmDialogController;
});