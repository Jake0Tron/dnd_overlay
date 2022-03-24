import * as React from 'react';
import './CharacterName.css'

const CharacterName = ({
  name, subtitle
}) => {
  return <div className='characterName'>
    <h1>{name}</h1>
    <h2>{subtitle}</h2>
  </div>
}

export default CharacterName;