import React from 'react';
import styles from '../styles/matchList.module.css';

const MatchList = ({ matches }) => {
  return (
    <div className={styles.matchListContainer}>
      <h3 className={styles.matchListTitle}>Partidas Agendadas</h3>
      <ul className={styles.matchList}>
        {matches.map((match) => (
          <li key={match.id} className={styles.matchListItem}>{`${match.team1} vs ${match.team2}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
