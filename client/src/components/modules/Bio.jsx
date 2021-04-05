import React from 'react';
import moduleStyles from './_modules.css';
import styles from './Bio.css';
import pic from '../img/self.png';

const Bio = () => {
  return(
    <div className={moduleStyles.moduleContainer}>
      <div className={styles.bio}>
        <h1>BIO</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={pic} />
      </div>
    </div>
  )
}

export default Bio;