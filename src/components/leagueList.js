// components/LeagueList.js
import React from 'react';
import LeagueItem from './leagueItem';
import styles from '../styles/leagueList.module.css';

const LeagueList = ({ leagues, onSelectLeague }) => {
  return (
    <div className={styles.leagueList}>
      {leagues.map((league) => (
        <LeagueItem key={league.id} league={league} onSelectLeague={onSelectLeague} />
      ))}
    </div>
  );
};

export default LeagueList;
