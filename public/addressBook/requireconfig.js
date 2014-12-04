require.config({

  baseUrl: './',

  paths: {
    backbone      : '../libs/backbone/backbone',
    bootstrap     : '../libs/bootstrap/dist/js/bootstrap',
    jquery        : '../libs/jquery/dist/jquery',
    underscore    : '../libs/underscore/underscore',
    handlebars    : '../libs/handlebars/handlebars.runtime',
    bluebird      : '../libs/bluebird/js/browser/bluebird',
    vertebrae     : '../libs/vertebrae'
  },
  
  shim: {
    bootstrap:['jquery'],
    handlebars: {
      exports: 'Handlebars'
    }

  },

  deps: ['jquery', 'app/app'],

  callback: function($, App) {
    $(function() {

      App.launch(document.body);
      
    });
  }

});