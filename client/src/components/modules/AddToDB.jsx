import React, { useReducer } from 'react';
import { addTrackOfTheDay } from '../http/http.js';
import moduleStyles from './_modules.css';
import styles from './AddToDB.css';

const initalState = {
  embedBig: '',
  embedMini: '',
  name: '',
  artist: '',
  genre: '',
  forDate: '',
  description: ''
};

const AddToDB = () => {
  const [formValues, setFormValues] = useReducer(
    (currentValues, newValues) => ({...currentValues, ...newValues}) , initalState);

  const handleFormChange = e => setFormValues({ [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    addTrackOfTheDay(formValues)
      .then(setFormValues(initalState))
      .catch(e => console.log(e))
  }

  const textBoxBuilder = (type, name, placeholder, required = false) => {
    return (
      <input
        type={type}
        name={name}
        value={formValues[name]}
        onChange={handleFormChange}
        placeholder={placeholder ? placeholder : null}
        required={required}
      ></input>
    )
  }

  return (
    <div className={moduleStyles.moduleContainer}>
      <div className={styles.contactContainer}>
      <h2>Add Track of the Day</h2>
      <form onSubmit={handleSubmit}>
        {textBoxBuilder('text', 'embedBig', 'Embed Big', true)}
        {textBoxBuilder('text', 'embedMini', 'Embed Mini', true)}
        {textBoxBuilder('text', 'name', 'Name', true)}
        {textBoxBuilder('text', 'artist', 'Artist', true)}
        {textBoxBuilder('text', 'genre', 'Genre', true)}
        {textBoxBuilder('date', 'forDate', 'Date to Release', true)}
        {textBoxBuilder('text', 'description', 'Description')}
        <button>Send</button>
      </form>
      </div>
    </div>
  )
}

export default AddToDB;
