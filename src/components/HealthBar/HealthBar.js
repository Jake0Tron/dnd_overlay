import * as React from 'react';
import './Healthbar.css';
import IncDecStack from '../common/IncDecStack/IncDecStack';

const HealthBar = ({stats, setHealth}) => {
  const {maxHealth, currentHealth} = stats;
  return (
    <>
    <div>
      {currentHealth} / {maxHealth}
    </div>
    <progress 
      className='healthBar'
      max={maxHealth} 
      value={currentHealth}
    />
    <IncDecStack 
      maxStatValue={maxHealth}
      statValue={currentHealth}  
      setStatValue={(val) => { 
        setHealth({currentHealth:val, maxHealth }) } 
      } />
  </>
  )
};
export default HealthBar;