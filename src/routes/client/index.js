const app = require('../../loaders/express-handlebars');
import { Product } from '../../models/Product';
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// GET REQUEST

app.get('/database-find/:CatalogEntryCode', async function (req, res) {
	// TRY THIS
	try {
		const catNr = req.params.CatalogEntryCode;

		const product = await Product.find({ CatalogEntryCode: catNr, MarketId: 'sv' });

		//PRODUCT NOT FOUND
		if (!product) {
			res.status(404).send('product not found');
			return;
		}
		// SUCESS sending data
		res.status(200).send(product);

		// CANT FIND
	} catch (e) {
		console.log(e);
		res.status(400).send('Cant find product');
	}
});

module.exports = app;
