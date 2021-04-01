import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyles.js';
import styles from './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import HomePage from './modules/HomePage.jsx';
import TrackOfTheDay from './modules/TrackOfTheDay.jsx';
import Mixes from './modules/Mixes.jsx';
import Bio from './modules/Bio.jsx';
import Contact from './modules/Contact.jsx';
import AddToDB from './modules/AddToDB.jsx';
import backgroundImage from './img/background.jpg';

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
              {display === 'mixes' && <Mixes />}
              {display === 'bio' && <Bio />}
              {display === 'contact' && <Contact />}
            {/* </Switch> */}
          </div>
          <Footer />
        <GlobalStyle />
      {/* </BrowserRouter> */}
      {/* <AddToDB /> */}
        </div>
    )
}

export default App;

