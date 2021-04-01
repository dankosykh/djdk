// const nodemailer = require('nodemailer');
const { transporter, mailOptions } = require('../../nodemailer.config');
const { addToEmailHistory, addNewTrack, getTrackOfTheDay } = require('../../db/controller');

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
      addToEmailHistory({ name, email, phone, subject, body }, (err, response) => {
        if (err) res.send(422);
        console.log('Written to DB');
        res.semd(201)
      });
    }
  });
};

const sendToDB = (req, res, next) => {
  addNewTrack(req.body, (err, response) => {
    if (err) res.send(422);
    console.log('Written to DB');
    res.send(201);
  })
}

const getTrackFromDB = (req, res, next) => {
  getTrackOfTheDay((err, response) => {
    if (err) res.send(404);
    res.send(response);
  });
}

module.exports = { sendEmail, sendToDB, getTrackFromDB }
