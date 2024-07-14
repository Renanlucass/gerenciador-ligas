import React from 'react';
import styles from '../styles/playerStats.module.css';

const PlayerStats = ({ stats }) => {
  return (
    <div className={styles.Container}>
      <h3 className={styles.Title}>Estatísticas de Jogadores</h3>
      <ul className={styles.List}>
        {stats.map((player) => (
          <li key={player.id} className={styles.Item}>{`${player.name}: ${player.goals} Gols, ${player.assists} Assistências`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerStats;
