// pages/index.js
import React, { useState } from 'react';
import Header from '../components/header';
import LeagueList from '../components/leagueList';
import LeagueDetail from '../components/leagueDetail';
import styles from '../styles/Home.module.css';

const initialLeagues = [
  {
    id: 1,
    name: 'Liga A',
    summary: 'Resumo da Liga A',
    date: '2024-07-14',
    teams: [
      { id: 1, name: 'Time 1' },
      { id: 2, name: 'Time 2' },
    ],
    matches: [
      { id: 1, team1: 'Time 1', team2: 'Time 2' },
    ],
    stats: [
      { id: 1, name: 'Jogador 1', goals: 5, assists: 2 },
    ],
  },
  {
    id: 2,
    name: 'Liga B',
    summary: 'Resumo da Liga B',
    date: '2024-07-15',
    teams: [
      { id: 3, name: 'Time 3' },
      { id: 4, name: 'Time 4' },
    ],
    matches: [
      { id: 2, team1: 'Time 3', team2: 'Time 4' },
    ],
    stats: [
      { id: 2, name: 'Jogador 2', goals: 3, assists: 1 },
    ],
  },
];

const Home = () => {
  const [leagues, setLeagues] = useState(initialLeagues);
  const [selectedLeague, setSelectedLeague] = useState(null);

  const handleSelectLeague = (league) => {
    setSelectedLeague(league);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <LeagueList leagues={leagues} onSelectLeague={handleSelectLeague} />
        </div>
        {selectedLeague && <LeagueDetail league={selectedLeague} />}
      </div>
    </div>
  );
};

export default Home;
