import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyles.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import HomePage from './main/HomePage.jsx';
import TrackOfTheDay from './main/TrackOfTheDay.jsx';
import Contact from './main/Contact.jsx';
import backgroundImage from './img/background.jpg';
import styles from './App.css';

const App = () => {
  const [ display, setDisplay ] = useState('contact');

    return (
      // <BrowserRouter>
        <div className={styles.appContent}>
          <Header setDisplay={setDisplay}/>
            <img className={styles.backgroundImage} src={backgroundImage}/>
          <div className={styles.contentContainer}>
            {/* <Switch> */}
              {/* <Route exact path='/' component={HomePage} />
              <Route exact path='/trackoftheday' component={TrackOfTheDay} /> */}
              {display === 'home' && <HomePage />}
              {display === 'dkstrackoftheday' && <TrackOfTheDay />}
              {display === 'contact' && <Contact />}
            {/* </Switch> */}
          </div>
          <Footer />
        <GlobalStyle />
      {/* </BrowserRouter> */}
        </div>
    )
}

export default App;

