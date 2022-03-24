import * as React from 'react';
import IncDecStack from '../common/IncDecStack/IncDecStack';
import './StatBlock.css'

const calculateModifier = (value) => {
  const v = (value - 10) * 0.5
  return v >  0 ? Math.ceil(v) : Math.floor(v);
}

const StatBlock = ({
  title = '',
  statValue = 10,
  setStatValue
}) => {
  const [statModifier, setStatModifier] = React.useState(10);

  React.useEffect(() => {
    setStatModifier(calculateModifier(statValue));
  }, [statValue])

  const _onStatChange = (statValue, title) => {
    setStatValue(statValue, title)
  }

  return (
  <div>
    <div className='statblock'>
      <h2>{title.toUpperCase()}</h2>
      <h1>{statModifier}</h1>
      <h3>{statValue}</h3>
    </div>
    <IncDecStack 
      statValue={statValue} 
      setStatValue={(value) => _onStatChange(value, title)} 
      maxStatValue={20}
      />
  </div>
  )
}

export default StatBlock;