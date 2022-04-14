import * as React from 'react';
import './IncDecStack.css';

const IncDecStack = ({setStatValue, statValue, maxStatValue, title, className}) => {

  const _onChange = (value) => {
    if (value <= maxStatValue && value >= 0){
      setStatValue(value)
    }
  }

  return (
    <div className={`${className} incDecStackContainer`}>
      {title && <h3 className='header'>{title}</h3>}
      <div className='buttonContainer'>
        <button onClick={() => _onChange(statValue - 1)}>-</button>
        <span>{statValue}</span>
        <button onClick={() => _onChange(statValue + 1)}>+</button>
      </div>
  </div>
)
}

export default IncDecStack;