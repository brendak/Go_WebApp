var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var eventSchema = new mongoose.Schema({

title: { type: String, required: true},
detail: { type: String, required: true},
date: { type: Date, required: true },
coordinatesLong: { type: String, required: true },
coordinatesLat: { type: String, required: true },
address: { type: {street: String, city: String, zip: String}, required: true },
category: { type: String },
});

mongoose.model('Event', eventSchema);
