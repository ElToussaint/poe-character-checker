import React from 'react';

const CharacterCard = (props) => {
  const { name, league, level } = props.info;
  const ascendancy = props.info.class;

  return (
    <article className='card charCard'>
      <div className='charHeadContainer'>
        <h3 className='charName'>{name}</h3>
      </div>
      <ul className='charDetailsList'>
        <li className='charDetail'>Class: {ascendancy}</li>
        <li className='charDetail'>League: {league}</li>
        <li className='charDetail'>Level: {level}</li>
      </ul>
    </article>
  );
};

export default CharacterCard;
