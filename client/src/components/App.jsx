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
import Menu from './modules/Menu.jsx';
import bgInit from './img/background.jpg';
import controller from './img/controller.png';
import self from './img/self.png';

const changeImage = () => {

}

const App = () => {
  const [ display, setDisplay ] = useState('home');
  const [ bg, setBg ] = useState(bgInit)


    return (
      // <BrowserRouter>
        <div className={styles.appContent}>
          <Header />
          <div className={styles.spacer}>
            <div className={styles.contentImageContainer}>
              <Menu display={display} setDisplay={setDisplay} />
              <div className={styles.imgContainer}>
                <img className={styles.backgroundImage} src={bg}/>
              </div>
              {/* <Switch> */}
                {/* <Route exact path='/' component={HomePage} />
                <Route exact path='/trackoftheday' component={TrackOfTheDay} /> */}
              <div className={styles.contentContainer}>
                {display === 'home' && <HomePage />}
                {display === 'dkstrackoftheday' && <TrackOfTheDay />}
                {display === 'mixes' && <Mixes />}
                {display === 'bio' && <Bio />}
                {display === 'contact' && <Contact />}
              </div>
              {/* </Switch> */}
            </div>
          </div>
          <Footer />
        <GlobalStyle />
      {/* </BrowserRouter> */}
      {/* <AddToDB /> */}
        </div>
    )
}

export default App;

