// const nodemailer = require('nodemailer');
const { transporter, mailOptions } = require('../../nodemailer.config');

const sendEmail = (req, res, next) => {
  { name, email, body, subject } = req.body;
  console.log(req.body);
  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
}

module.exports = { sendEmail }