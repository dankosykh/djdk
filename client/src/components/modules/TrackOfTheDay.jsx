import React, { useState, useEffect, useLayoutEffect } from 'react';
import { getTrackOfTheDay } from '../http/http.js';
import parse from 'html-react-parser';
import PastTracks from './PastTracks.jsx'
import moduleStyles from './_modules.css';
import styles from './TrackOfTheDay.css';

const TrackOfTheDay = () => {
  const [ trackInfo, setTrack ] = useState([]);

  useEffect(() => {
    getTrackOfTheDay()
      .then(res => {
        let { embedBig, embedMini, name, artist, genre, forDate, description } = res;
        console.log(res)
        setTrack({ embedBig, embedMini, name, artist, genre, forDate, description })})
  }, []);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  return (
    <div className={moduleStyles.moduleContainer}>
      <div className={styles.trackOfTheDayContainer}>
        <h1>DK's TRACK OF THE DAY</h1>
        <h4>{today}</h4>
        <div className={styles.iframeContainer}>
          {trackInfo.embedBig && parse(trackInfo.embedBig)}
        </div>
        <div className={styles.trackInfo}>
          {trackInfo.name && <h2>{trackInfo.name}</h2>}
          {trackInfo.artist && <h3>{trackInfo.artist}</h3>}
          {trackInfo.genre && <h5>{trackInfo.genre}</h5>}
          {trackInfo.description && <h5>{trackInfo.description}</h5>}
        </div>
        <div>
          <PastTracks />
        </div>
      </div>
    </div>
  )
}

export default TrackOfTheDay;


