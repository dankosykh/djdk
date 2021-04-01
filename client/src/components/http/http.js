import axios from 'axios';

export const postEmail = ({ name, email, phone, subject, body }) => {
  return new Promise((resolve, reject) => {
    axios.post('/contact', { name, email, phone, subject, body })
      .then(() => resolve())
      .catch(e => reject(e))
  })
}

export const getTrackOfTheDay = () => {
  return new Promise((resolve, reject) => {
    axios.get('/trackoftheday')
      .then(res => resolve(res.data))
      .catch(err => resolve(err))
  })
}