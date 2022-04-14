import * as React from 'react';
import './Healthbar.css';
import IncDecStack from '../common/IncDecStack/IncDecStack';

const HealthBar = ({stats, setHealth}) => {
  const {maxHealth, currentHealth, tempHealth} = stats;
  return (
    <div className='healthBarContainer'>
      <div>
        {currentHealth} {tempHealth > 0  ? `(+ ${tempHealth})` : null} / {maxHealth}
      </div>
      <progress 
        className='healthBar'
        max={maxHealth} 
        value={currentHealth + tempHealth}
      />
    <div className='healthControls'>
      <IncDecStack 
        className="healthControl"
        title="HP"
        maxStatValue={(maxHealth)}
        statValue={(currentHealth)}  
        setStatValue={(val) => { 
          setHealth({...stats, currentHealth:val }) } 
        } 
      />
      <IncDecStack 
        className="healthControl"
        title="Temp"
        maxStatValue={tempHealth+1}
        statValue={tempHealth}  
        setStatValue={(val) => { 
          setHealth({...stats, tempHealth:val }) } 
        } 
      />
    </div>
  </div>
  )
};
export default HealthBar;