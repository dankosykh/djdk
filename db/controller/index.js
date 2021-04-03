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
  let today = new Date().toJSON().slice(0,10);
  console.log(today)
  TrackOfTheDay
    .findOne({forDate: today})
    .exec(callback);
}

module.exports = { addToEmailHistory, addNewTrack, getTrackOfTheDay };
