const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const product = new Schema({
	PriceValueId: String,
	Created: String,
	Modified: String,
	CatalogEntryCode: String,
	MarketId: String,
	CurrencyCode: String,
	ValidFrom: String,
	ValidUntil: String,
	UnitPrice: String
});

export const Product = mongoose.model('Product', product);
