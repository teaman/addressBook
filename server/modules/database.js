module.exports = function(config){

	var knex = require('knex')(config),
		bookshelf = require('bookshelf')(knex),
		toExport = {},
		models = [
			'Contact',
			'State'
		];

	try{
		for(var model in models){
			console.log('Loading Model: ' + models[model]);
			toExport[models[model]] = require('../app/models/' + models[model])(bookshelf);
		}
	}catch(err){
		console.warn('No models defined.');
	}
	
	(function(m){

		m.Contact.model = m.Contact.model.extend({
		    state: function() {
		        return this.belongsTo(m.State.model,'stateId');
		    }
		});
	
		// update all model references so that the relation information can be used by collections
		for (var i = 0, max = models.length; i < max; i++) {
		  m[models[i]].collection = m[models[i]].collection.extend({
		    model: m[models[i]].model
		  });
		}
		
	})(toExport);

	toExport.bookshelf = bookshelf;

	return toExport;
};


