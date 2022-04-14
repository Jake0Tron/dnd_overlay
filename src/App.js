import * as React from 'react';
import './App.css';
import StatBar from './components/StatBar';
import HealthBar from './components/HealthBar';
import CharacterName from './components/CharacterName';

const DEFAULT_STATS = {
    health: {
      maxHealth: 52,
      currentHealth: 22,
      tempHealth: 0
    },
    stats: {
      STR: 7,
      DEX: 18,
      CON: 14,
      WIS: 9,
      INT: 12,
      CHA: 16,
    }
}

const LOCAL_STORAGE_KEY = 'dnd-stats';

function App() {

  const [statBlock, setStatBlock] = React.useState(DEFAULT_STATS.stats);
  const [healthStats, setCurrentHealthStats] = React.useState(DEFAULT_STATS.health);

  React.useEffect(() => {
    // TODO PULL STATS FROM STORAGE?
    const storedStats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedStats != null){
      const {stats, health} = storedStats;
      setStatBlock(stats);
      setCurrentHealthStats(health)
    }
  }, []);

  const _onHealthChange = (health) => {
    setCurrentHealthStats(health);
    saveStatsToLocalStorage({health, stats: statBlock});
  }

  const _onStatChange = (stats) => {
    setStatBlock(stats);
    saveStatsToLocalStorage({stats, health: healthStats});
  }

  const saveStatsToLocalStorage = (allStats) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allStats))
  }

  return (
    <div className="App">
      <div>
        <CharacterName 
          name="Garth"
          subtitle="Sneak and poke"
        />
        <StatBar 
          statMap={statBlock}
          setStat={_onStatChange}
        />
        <HealthBar stats={healthStats} setHealth={_onHealthChange}/>
      </div>
    </div>
  );
}

export default App;
