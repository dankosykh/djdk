import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import PastTracks from './PastTracks.jsx'
import moduleStyles from './_modules.css';
import styles from './TrackOfTheDay.css';

const TrackOfTheDay = () => {
  const [ trackInfo, setTrack ] = useState('<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/998660086&color=%238e890e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/antiupmusic" title="Anti Up" target="_blank" style="color: #cccccc; text-decoration: none;">Anti Up</a> · <a href="https://soundcloud.com/antiupmusic/anti-up-sensational" title="Anti Up - Sensational" target="_blank" style="color: #cccccc; text-decoration: none;">Anti Up - Sensational</a></div>')

  return (
    <div className={moduleStyles.moduleContainer}>
      <div className={styles.trackOfTheDayContainer}>
        <h2>DK's Track of the Day</h2>
        <div className={styles.iframeContainer}>
          {parse(trackInfo)}
        </div>
        <div>
          <PastTracks />
        </div>
      </div>
    </div>
  )
}

export default TrackOfTheDay;
