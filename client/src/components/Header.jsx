import React from 'react';
import styles from './Header.css';

const Header = ({setDisplay}) => {
  const menuItems = ['HOME', 'BIO', 'DKs TRACK OF THE DAY', 'MIXES', 'CONTACT'];

  const handleMenuSelect = e =>
    setDisplay(e.target.name
      .toLowerCase()
      .replace(/\s+/g, '')
    );

  const ButtonBuilder = ({menuItem}) => {
    return (
      <button
        type='button'
        name={menuItem}
        onClick={handleMenuSelect}
      >
        {menuItem}</button>
    )
  }

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Dj DK</h1>
      </div>
      {/* <div className={styles.menu}>
        {menuItems.map((menuItem, i) => <ButtonBuilder key={i} menuItem={menuItem}/>)}
      </div> */}
    </div>
  )
}

export default Header;