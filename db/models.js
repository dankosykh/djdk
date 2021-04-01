const mongoose = require('mongoose');
const db = require('./connection.js');

const Contact = mongoose.model('Contact', {
  name: { type: String, trim: true},
  email: { type: String, trim: true},
  phone: { type: String, trim: true},
  subject: { type: String, trim: true},
  body: { type: String, trim: true},
  date: { type: Date, default: Date.now }
});

const TrackOfTheDay = mongoose.model('TrackOfTheDay', {
  embedBig: { type: String, required: true, unique: true, trim: true },
  embedMini: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  artist: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  forDate: { type: Date, required: true, unique: true, trim: true },
  description: { type: String, trim: true},
  addDate: { type: Date, default: new Date() },
});

const MyMixes = mongoose.model('MyMixes', {
  embedBig: { type: String, required: true, unique: true, trim: true },
  embedMini: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  date: { type: Date, required: true, trim: true },
  addDate: { type: Date, default: new Date() },
  summary: String,
  tracklist: String,
})


module.exports = { Contact, TrackOfTheDay, MyMixes };
