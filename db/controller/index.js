const { Contact, TrackOfTheDay, MyMixes } = require('../models.js');

// add to DB ___________________________________
const addToEmailHistory = (params, callback) => {
  let newContact = new Contact(params);
  newContact.save(callback)
}

const addNewTrack = (params, callback) => {
  let newTrack = new TrackOfTheDay(params);
  newTrack.save(callback)
}

// get from DB ___________________________________
const getTrackOfTheDay = (callback) => {
  TrackOfTheDay
    .findOne({forDate: new Date().toJSON().slice(0,10)})
    .exec(callback);
}

module.exports = { addToEmailHistory, addNewTrack, getTrackOfTheDay };
