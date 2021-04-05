import React, { useState } from 'react';
import styles from './Menu.css';

const Menu = ({display, setDisplay}) => {
  const menuItems = ['HOME', 'BIO', 'DKs TRACK OF THE DAY', 'MIXES', 'CONTACT'];

  const handleMenuSelect = e =>
    setDisplay(e.target.name
      .toLowerCase()
      .replace(/\s+/g, '')
    );

  const ButtonBuilder = ({menuItem, display}) => {
    return (
      <button
        type='button'
        name={menuItem}
        onClick={handleMenuSelect}
        className={
          menuItem.toLowerCase().replace(/\s+/g, '') === display ? styles.selected : styles.menuButton
        }
      >
        {menuItem}</button>
    )
  }

  return (
    <div className={styles.menu}>
        {menuItems.map((menuItem, i) => <ButtonBuilder key={i} menuItem={menuItem} display={display} />)}
      </div>
  )
}

export default Menu;