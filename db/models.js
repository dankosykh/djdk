const mongoose = require('mongoose');
const db = require('./connection.js');

let StringTrim = { type: String, trim: true};
let StringRequiredTrim = { type: String, required: true, trim: true };

const Contact = mongoose.model('Contact', {
  name: StringTrim,
  email: StringTrim,
  phone: StringTrim,
  subject: StringTrim,
  body: StringTrim,
  date: { type: Date, default: Date.now }
});

const TrackOfTheDay = mongoose.model('TrackOfTheDay', {
  embedBig: StringRequiredTrim,
  embedMini: StringRequiredTrim,
  name: StringRequiredTrim,
  artist: StringRequiredTrim,
  genre: StringRequiredTrim,
  forDate: { type: Date, required: true, unique: true, trim: true, index: true },
  description: StringTrim,
  addDate: { type: Date, default: new Date() },
});

const MyMixes = mongoose.model('MyMixes', {
  embedBig: StringRequiredTrim,
  embedMini: StringRequiredTrim,
  name: StringRequiredTrim,
  genre: StringRequiredTrim,
  date: { type: Date, required: true, trim: true },
  addDate: { type: Date, default: new Date() },
  summary: String,
  tracklist: String,
})


module.exports = { Contact, TrackOfTheDay, MyMixes };
