const mongoose = require('mongoose');

// Import .env file values into variable 'process.env'
require('dotenv').config();

// Import Express and initialize Express Server Application
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Import Express Handlebars for rendering HTML with {{brackets}}
app.use(require('./express-handlebars'));

// Make all files in the /public folder accessible to everyone,
// so that we can show images in the browser for example
app.use('../public', express.static('public'));

app.use(require('./routes'));

mongoose
	.connect('mongodb+srv://Rallelulia:adminadmin@arbetsprov.aelxr.mongodb.net/Arbetsprov?retryWrites=true&w=majority')
	.then((connection) => {
		connection;
	})
	.catch((err) => {
		console.log('database did not connect ', err);
	});
/**
 * 	Start Express Server Application
 **/
app.listen(process.env.PORT, function () {
	console.log(`App listening on port ${process.env.PORT}`);
});

module.exports = app;
