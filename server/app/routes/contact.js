module.exports.init = function(app, express) {
    var Contact = app.get('models').Contact.model,
        Contacts = app.get('models').Contact.collection,
        State = app.get('models').State.model,
        router = express.Router(),
        message = {};


/*var states = [
    {
        "state": "Alabama",
        "abbr": "AL"
    },
    {
        "state": "Alaska",
        "abbr": "AK"
    },
    {
        "state": "American Samoa",
        "abbr": "AS"
    },
    {
        "state": "Arizona",
        "abbr": "AZ"
    },
    {
        "state": "Arkansas",
        "abbr": "AR"
    },
    {
        "state": "California",
        "abbr": "CA"
    },
    {
        "state": "Colorado",
        "abbr": "CO"
    },
    {
        "state": "Connecticut",
        "abbr": "CT"
    },
    {
        "state": "Delaware",
        "abbr": "DE"
    },
    {
        "state": "District Of Columbia",
        "abbr": "DC"
    },
    {
        "state": "Federated States Of Micronesia",
        "abbr": "FM"
    },
    {
        "state": "Florida",
        "abbr": "FL"
    },
    {
        "state": "Georgia",
        "abbr": "GA"
    },
    {
        "state": "Guam",
        "abbr": "GU"
    },
    {
        "state": "Hawaii",
        "abbr": "HI"
    },
    {
        "state": "Idaho",
        "abbr": "ID"
    },
    {
        "state": "Illinois",
        "abbr": "IL"
    },
    {
        "state": "Indiana",
        "abbr": "IN"
    },
    {
        "state": "Iowa",
        "abbr": "IA"
    },
    {
        "state": "Kansas",
        "abbr": "KS"
    },
    {
        "state": "Kentucky",
        "abbr": "KY"
    },
    {
        "state": "Louisiana",
        "abbr": "LA"
    },
    {
        "state": "Maine",
        "abbr": "ME"
    },
    {
        "state": "Marshall Islands",
        "abbr": "MH"
    },
    {
        "state": "Maryland",
        "abbr": "MD"
    },
    {
        "state": "Massachusetts",
        "abbr": "MA"
    },
    {
        "state": "Michigan",
        "abbr": "MI"
    },
    {
        "state": "Minnesota",
        "abbr": "MN"
    },
    {
        "state": "Mississippi",
        "abbr": "MS"
    },
    {
        "state": "Missouri",
        "abbr": "MO"
    },
    {
        "state": "Montana",
        "abbr": "MT"
    },
    {
        "state": "Nebraska",
        "abbr": "NE"
    },
    {
        "state": "Nevada",
        "abbr": "NV"
    },
    {
        "state": "New Hampshire",
        "abbr": "NH"
    },
    {
        "state": "New Jersey",
        "abbr": "NJ"
    },
    {
        "state": "New Mexico",
        "abbr": "NM"
    },
    {
        "state": "New York",
        "abbr": "NY"
    },
    {
        "state": "North Carolina",
        "abbr": "NC"
    },
    {
        "state": "North Dakota",
        "abbr": "ND"
    },
    {
        "state": "Northern Mariana Islands",
        "abbr": "MP"
    },
    {
        "state": "Ohio",
        "abbr": "OH"
    },
    {
        "state": "Oklahoma",
        "abbr": "OK"
    },
    {
        "state": "Oregon",
        "abbr": "OR"
    },
    {
        "state": "Palau",
        "abbr": "PW"
    },
    {
        "state": "Pennsylvania",
        "abbr": "PA"
    },
    {
        "state": "Puerto Rico",
        "abbr": "PR"
    },
    {
        "state": "Rhode Island",
        "abbr": "RI"
    },
    {
        "state": "South Carolina",
        "abbr": "SC"
    },
    {
        "state": "South Dakota",
        "abbr": "SD"
    },
    {
        "state": "Tennessee",
        "abbr": "TN"
    },
    {
        "state": "Texas",
        "abbr": "TX"
    },
    {
        "state": "Utah",
        "abbr": "UT"
    },
    {
        "state": "Vermont",
        "abbr": "VT"
    },
    {
        "state": "Virgin Islands",
        "abbr": "VI"
    },
    {
        "state": "Virginia",
        "abbr": "VA"
    },
    {
        "state": "Washington",
        "abbr": "WA"
    },
    {
        "state": "West Virginia",
        "abbr": "WV"
    },
    {
        "state": "Wisconsin",
        "abbr": "WI"
    },
    {
        "state": "Wyoming",
        "abbr": "WY"
    }
];

for(var x = 0; x < states.length; x++){
    State.forge(states[x]).save();
}*/


    // list of error messages returned form the server
    message.ID_NOT_ALLOWED = {
        type: 'ERROR',
        message: 'ID is not allowed in the body of the data.'
    };

    message.ID_IS_REQUIRED = {
        type: 'ERROR',
        message: 'Contact your trying to save must have a ID.'
    };

    message.CANNOT_CREATE_CONTACT = {
        type: 'ERROR',
        message: 'Contact could not be created.'
    };

    message.CANNOT_UPDATE_CONTACT = {
        type: 'ERROR',
        message: 'Contact could not be updated.'
    };

    message.CANNOT_DELETE_CONTACT = {
        type: 'ERROR',
        message: 'Contact could not be deleted.'
    };

    message.CANNOT_FETCH_CONTACT = {
        type: 'MESSAGE',
        message: 'Contact could not be fetched.'
    };

    // returns a list of contacts or a contact
    router.get('/all', function(req, res) {
        Contacts.forge()
        .fetch({
            withRelated: ['state']
        })
        .then(function(contacts){
            res.send(contacts);
        }).catch(function(){
            res.status(404).send(message.CANNOT_FETCH_CONTACT);
        });
    });

    // return a contact object
    router.get('/:id', function(req, res) {
        Contact.where({
            id: req.params.id
        })
        .fetch({
            withRelated: ['state']
        })
        .then(function(contact){
            if(contact !== null){
                res.send(contact);
            }else{
                res.status(404).send(message.CANNOT_FETCH_CONTACT);
            }
        });
    });

    // update a contact
    router.put('/:id', function(req, res){
        var data = req.body;

        data.id = req.params.id;

        Contact.forge(data)
        .save()
        .then(function(contact){
            res.status(204).send({
                id: contact.id
            });
        })
        .catch(function(){
            res.status(404).send(message.CANNOT_UPDATE_CONTACT);
        });
    });

    // create a contact
    router.post('/', function(req, res){
        var data = req.body;

        Contact.forge(data)
        .save()
        .then(function(contact){
            res.status(201).send({
                id: contact.id
            });
        })
        .catch(function(err){
            res.status(404).send(message.CANNOT_CREATE_CONTACT);
        });
    });

    // delete a contact
    router.delete('/:id',function(req, res){

        Contact.where({
            id: req.params.id
        })
        .fetch()
        .then(function(contact){
            contact.destroy();
            res.status(204).send();
        })
        .catch(function(){
            res.status(404).send(message.CANNOT_DELETE_CONTACT);
            return false;
        });
    });
    
    return router;
};
