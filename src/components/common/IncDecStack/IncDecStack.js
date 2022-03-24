import * as React from 'react';

const IncDecStack = ({setStatValue, statValue, maxStatValue}) => {

  const _onChange = (value) => {
    if (value <= maxStatValue && value >= 0){
      setStatValue(value)
    }
  }

  return (<div className='buttonContainer'>
  <button onClick={() => _onChange(statValue - 1)}>-</button>
  <span>{statValue}</span>
  <button onClick={() => _onChange(statValue + 1)}>+</button>
</div>)
}

export default IncDecStack;