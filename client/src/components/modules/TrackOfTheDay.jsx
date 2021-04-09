import React, { useState, useEffect, useLayoutEffect } from 'react';
import { getTrackOfTheDay, getPastTracksOfTheDay } from '../http/http.js';
import parse from 'html-react-parser';
import PastTracks from './PastTracks.jsx'
import moduleStyles from './_modules.css';
import styles from './TrackOfTheDay.css';

const TrackOfTheDay = () => {
  const [ trackInfo, setTrack ] = useState([]);
  const [ pastTracks, getPastTracks ] = useState([]);
  const [ seePastTracks, setPastTracks ] = useState(false);

  useEffect(() => {
    getTrackOfTheDay()
      .then(res => {
        let { embedBig, embedMini, name, artist, genre, forDate, description } = res;
        setTrack({ embedBig, embedMini, name, artist, genre, forDate, description })})
  }, []);

  useEffect(() => {
    if (!seePastTracks) { return }
    getPastTracksOfTheDay()
      .then(res => getPastTracks(res))
      .catch(e => console.log(e))
  }, [seePastTracks])

  // useEffect(() => {
  //   if (!seePastTracks) { return }
  //   addPastTracks()
  // }, [pastTracks])

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  // const addPastTracks = (track) => {
  //   console.log(pastTracks)
  //   console.log(track)
  //   return (
  //     <div>
  //       {this.embedMini}
  //     </div>
  //   )
  // }

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
        {!seePastTracks && <button onClick={() => setPastTracks(true)}>CHECK OUT THE PREVIOUS TRACKS</button>}
        {seePastTracks &&
          <div>
            <h2>PAST TRACKS</h2>
            {/* <div>
              {pastTracks && pastTracks.map(track => addPastTracks(track))}
            </div> */}
          </div>
        }
      </div>
    </div>
  )
}

export default TrackOfTheDay;


