// components/LeagueDetail.js
import React from 'react';
import TeamList from './teamList';
import MatchList from './matchList';
import PlayerStats from './playerStats';
import styles from '../styles/leagueDetail.module.css';

const LeagueDetail = ({ league }) => {
  return (
    <div className={styles.leagueDetailContainer}>
      <h2 className={styles.leagueDetailTitle}>{league.name}</h2>
      <span className={styles.leagueDetailDate}>{league.date}</span>
      <TeamList teams={league.teams} />
      <MatchList matches={league.matches} />
      <PlayerStats stats={league.stats} />
      <div className={styles.leagueActions}>
        <button className={styles.actionButton}>Adicionar Time</button>
        <button className={styles.actionButton}>Registrar Partida</button>
        <button className={styles.actionButton}>Excluir Liga</button>
      </div>
    </div>
  );
};

export default LeagueDetail;
