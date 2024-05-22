import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://t.me/ivanspnn" target="_blank">
        Telegram
      </a>
      <div>2024</div>
      <a href="https://github.com/IvanSpN" target="_blank">
        GitHub
      </a>
    </footer>
  );
};
