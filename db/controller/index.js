const { Contact, TrackOfTheDay, MyMixes } = require('../models.js');

const addToEmailHistory = (params, callback) => {
  let newContact = new Contact(params);
  newContact.save(callback)
}

const addNewTrack = (params, callback) => {
  let newTrack = new TrackOfTheDay(params);
  newTrack.save(callback)
}


module.exports = { addToEmailHistory, addNewTrack };