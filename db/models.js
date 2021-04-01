const mongoose = require('mongoose');
const  db = require('./connection.js');

const Contact = mongoose.model('Contact', {
  name: String,
  email: String,
  phone: String,
  subject: String,
  body: String,
  date: { type: Date, default: Date.now }
});

const TrackOfTheDay = mongoose.model('TrackOfTheDay', {
  embedBig: { type: String, required: true, unique: true },
  embedMini: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String, required: true },
  forDate: { type: Date, required: true, unique: true },
  addDate: { type: Date, default: Date.now },
  description: String
});

const MyMixes = mongoose.model('MyMixes', {
  embedBig: { type: String, required: true, unique: true },
  embedMini: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  genre: { type: String, required: true },
  date: { type: Date, required: true },
  addDate: { type: Date, default: Date.now },
  summary: String,
  tracklist: String
})


module.exports = { Contact, TrackOfTheDay, MyMixes };