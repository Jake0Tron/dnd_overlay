import * as React from 'react';
import './App.css';
import StatBar from './components/StatBar';
import HealthBar from './components/HealthBar';
import CharacterName from './components/CharacterName';

const DEFAULT_STATS = {
    health: {
      maxHealth: 52,
      currentHealth: 22,
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


function App() {

  const [statBlock, setStatBlock] = React.useState(DEFAULT_STATS.stats);
  const [currentHealth, setCurrentHealth] = React.useState(DEFAULT_STATS.health);

  React.useEffect(() => {
    // TODO PULL STATS FROM STORAGE?
    
  }, []);

  const _onHealthChange = (val) => {
    setCurrentHealth(val);
  }

  const _onStatChange = (stats) => {
    setStatBlock(stats);
  }

  return (
    <div className="App">
      <CharacterName 
        name="Garth"
        subtitle="Sneak and poke"
      />
      <StatBar 
        statMap={statBlock}
        setStat={_onStatChange}
      />
      <HealthBar stats={currentHealth} setHealth={_onHealthChange}/>
    </div>
  );
}

export default App;
