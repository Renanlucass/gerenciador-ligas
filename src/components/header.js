import React from 'react';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Gerenciador de Ligas de Futebol</h1>
      <button className={styles.addLeague}>Criar Nova Liga</button>
    </header>
  );
};

export default Header;
