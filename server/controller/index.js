// const nodemailer = require('nodemailer');
const { transporter, mailOptions } = require('../../nodemailer.config');
const { addToEmailHistory, addNewTrack } = require('../../db/controller');

const sendEmail = (req, res, next) => {
  let { name, email, phone, subject, body } = req.body;
  let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");
  let [hour, minute] = new Date().toLocaleTimeString("en-US").split(/:| /);
  subject += ` RECIEVED ${month}/${date}/${year} at ${hour}:${minute}`;
  mailOptions.from = email;
  mailOptions.subject = subject;
  mailOptions.text = body + '\n\n' + name;
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      addToEmailHistory({ name, email, phone, subject, body }, (err, res) => {
        if (err) console.log(err);
        console.log('Written to DB');
      })
    }
  });
}

const sendToDB = (req, res, next) => {
  let { embedBig, embedMini, name, artist, genre, forDate, description } = req.body;
}

module.exports = { sendEmail }