import * as React from 'react';
import StatBlock from '../StatBlock/StatBlock';
import { set } from 'lodash';
import './StatBar.css';

const StatBar = ({
  statMap,
  setStat
}) => {

  const _onStatChange = (val, stat) => {
    const prevStats = {...statMap};
    set(prevStats, stat, val);
    setStat(prevStats);
  }

  return <div className='statBar'>
    {Object.keys(statMap).map((stat) => 
      <StatBlock 
        statValue={statMap[stat]} 
        title={stat} 
        key={`${stat}${statMap[stat]}`} 
        setStatValue={(val, stat) => _onStatChange(val, stat)}
      />
    )}
  </div>
}

export default StatBar