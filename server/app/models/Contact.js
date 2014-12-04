module.exports = function(Bookshelf) {

        var Contact = Bookshelf.Model.extend({
          tableName: 'contacts',
          idAttribute: 'id',
          hasTimestamps: true,

          fullName: function() {
            return this.get('firstName') + ' ' + this.get('lastName');
          },

          toJSON: function() {
            var json = {};

            json.id = this.id;
            json.fullName = this.fullName();
            json.firstName = this.get('firstName');
            json.lastName = this.get('lastName');
            json.email = this.get('email');
            json.phone = this.get('phone');
            json.address = this.get('address');
            json.city = this.get('city');
            json.state = this.related('state');
            json.zipCode = this.get('zipCode');
            return json;
          }
        });

        var Contacts = Bookshelf.Collection.extend({
          model: Contact,

          toJSON: function() {
            var json = [];
            this.forEach(function(elem) {
              json.push(elem.toJSON());
            });
            return json;
          }
        });

        // Returns the Model class
        return { model: Contact, collection: Contacts };
};