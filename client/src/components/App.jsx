import React, { useState } from 'react';
import HomePage from './main/HomePage.jsx';
import TrackOfTheDay from './main/TrackOfTheDay.jsx';

const App = () => {
  const [ display, setDisplay ] = useState('home');

    return (
      <div id='app-content'>
        <header>Can be a menu</header>
        <div id='main container'>
          {display === 'home' && <HomePage />}
          {display === 'trackOfTheDay' && <TrackOfTheDay />}
        </div>
        <footer>Can Be an about section</footer>
      </div>
    )
}

export default App;

