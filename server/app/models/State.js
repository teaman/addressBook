module.exports = function(Bookshelf) {

        var State = Bookshelf.Model.extend({
          tableName: 'states',
          idAttribute: 'id',
          hasTimestamps: false,

          toJSON: function() {
            var json = {};

            json.id = this.id;
            json.state = this.get('state');
            json.stateAbbr = this.get('abbr');
            return json;
          }
        });

        var States = Bookshelf.Collection.extend({
          model: State,

          toJSON: function() {
            var json = [];
            this.forEach(function(elem) {
              json.push(elem.toJSON());
            });
            return json;
          }
        });

        // Returns the Model class
        return { model: State, collection: States };
};