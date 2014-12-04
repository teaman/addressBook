module.exports =  {
	database: {
		client: 'sqlite3',
		debug: true,
		connection: {
			filename: "addressBook.db"
		},
	},
	server: {
		port: 9001
	},
	allowedDomains: 'http://localhost:8080'
};

