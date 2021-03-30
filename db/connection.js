const mongoose = require('mongoose');
const db = mongoose.connection;

await mongoose.connect('mongodb://localhost/djdk-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

module.exports = db;