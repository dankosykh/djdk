const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

const db = mongoose.connect('mongodb://localhost:27017/djdk-website', options, (err, res) => {
  if (err) console.log('DB connection error');
  console.log('DB connected');
});

module.exports = db;