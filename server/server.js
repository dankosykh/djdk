const express = require('express');
const { sendEmail, sendToDB, getTrackFromDB } = require('./controller');
const app = express();


const PORT = 3000;

app.use(express.static('./client/dist'));
app.use(express.json());

app.get('/', () => console.log('hit home'))
app.get('/trackoftheday', getTrackFromDB);

app.post('/contact', sendEmail);
app.post('/trackoftheday', sendToDB);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));