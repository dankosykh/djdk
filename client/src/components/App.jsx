import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyles.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import HomePage from './main/HomePage.jsx';
import TrackOfTheDay from './main/TrackOfTheDay.jsx';
import backgroundImage from './img/background.jpg';
import styles from './App.css';

const App = () => {
  const [ display, setDisplay ] = useState('home');

    return (
      // <BrowserRouter>
        <div id='app-content'>
          <Header setDisplay={setDisplay}/>
          <div className={styles.contentContainer}>
            <img className={styles.backgroundImage} src={backgroundImage}/>
            {/* <Switch> */}
              {/* <Route exact path='/' component={HomePage} />
              <Route exact path='/trackoftheday' component={TrackOfTheDay} /> */}
              {display === 'home' && <HomePage />}
              {display === 'trackOfTheDay' && <TrackOfTheDay />}
            {/* </Switch> */}
          </div>
          <Footer />
        <GlobalStyle />
      {/* </BrowserRouter> */}
        </div>
    )
}

export default App;

