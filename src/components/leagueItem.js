// components/LeagueItem.js
import React from 'react';
import styles from '../styles/leagueItem.module.css';

const LeagueItem = ({ league, onSelectLeague }) => {
  return (
    <div className={styles.leagueItemContainer} onClick={() => onSelectLeague(league)}>
      <h2 className={styles.leagueItemTitle}>{league.name}</h2>
      <p className={styles.leagueItemSummary}>{league.summary}</p>
      <span className={styles.leagueItemDate}>{league.date}</span>
    </div>
  );
};

export default LeagueItem;
