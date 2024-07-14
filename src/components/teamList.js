import React from 'react';
import styles from '../styles/teamList.module.css';

const TeamList = ({ teams }) => {
  return (
    <div className={styles.teamListContainer}>
      <h3 className={styles.teamListTitle}>Times Participantes</h3>
      <ul className={styles.teamList}>
        {teams.map((team) => (
          <li key={team.id} className={styles.teamListItem}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
