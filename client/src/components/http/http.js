import axios from 'axios';

export const postEmail = ({ name, email, phone, subject, body }) => {
  return new Promise((resolve, reject) => {
    let params = { name, email, phone, subject, body };
    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");
    let [hour, minute] = new Date().toLocaleTimeString("en-US").split(/:| /);
    subject += ` RECIEVED ${month}/${date}/${year} at ${hour}:${minute}`;
    axios.post('/contact', params)
      .then(resolve())
      .catch(e => reject(e))
  })
}

