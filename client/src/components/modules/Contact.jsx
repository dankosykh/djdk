import React, { useState } from 'react';
import { postEmail } from '../http/http.js';
import moduleStyles from './_modules.css';
import styles from './Contact.css';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [postSuccess, setSuccess] = useState(false);
  const [sent, setSent] = useState(false);
  const elements = [name, email, phone, subject, body];

  const handleSubmit = e => {
    e.preventDefault();
    postEmail({ name, email, phone, subject, body })
      .then(() => {
        setSuccess(true);
        setSent(true);
        resetFields();
      })
      .catch(() => setSent(true));
  }

  const resetFields = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setBody('');
  }

  const textBoxBuilder = (type, name, setState, placeholder, required = false) => {
    return (
      <input
        type={type}
        name={name}
        onChange={e => setState(e.target.value)}
        placeholder={placeholder ? placeholder : null}
        maxLength='50'
        required={required}
      ></input>
    )
  }

  const formFields = () => {
    return (
    <>
      <h2>CONTACT ME BELOW</h2>
      <form onSubmit={handleSubmit}>
        {textBoxBuilder('text', 'name', setName, 'Name', true)}
        {textBoxBuilder('email', 'email', setEmail, 'Email', true)}
        {textBoxBuilder('tel', 'phone', setPhone, 'Phone')}
        {textBoxBuilder('text', 'subject', setSubject, 'Subject', true)}
        <textarea
          type='text'
          maxLength='1500'
          placeholder='Hi, how are you?'
          onChange={e => setBody(e.target.value)}
          required
        ></textarea>
        <button>Send</button>
      </form>
    </>
    )
  }

  const ifSuccess = bool => {
    return bool
      ? (<h1>Thanks for reaching out! We'll be in touch.</h1>)
      : (<h1>Sorry, there seems to be an error. Please try again in a few minutes.</h1>)
  }

  return (
    <div className={moduleStyles.moduleContainer}>
      <div className={styles.contactContainer}>
        {!sent
          ? formFields()
          : postSuccess ? ifSuccess(true) : ifSuccess(false)
        }
      </div>
    </div>
  )
}

export default Contact;
