import axios from 'axios';

const postEmail = ({ name, email, phone, subject, body }) => {
  return new Promise((resolve, reject) => {
    axios.post('/contact', { name, email, phone, subject, body })
      .then(() => resolve())
      .catch(e => reject(e));
  });
};

const getTrackOfTheDay = () => {
  return new Promise((resolve, reject) => {
    axios.get('/trackoftheday')
      .then(res => resolve(res.data))
      .catch(e => resolve(e));
  });
};

const addTrackOfTheDay = ( params ) => {
  return new Promise((resolve, reject) => {
    axios.post('/trackoftheday', params)
      .then(res => resolve(res.data))
      .catch(e => resolve(e));
  });
};

export { postEmail, getTrackOfTheDay, addTrackOfTheDay }