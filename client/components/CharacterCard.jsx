import React from 'react';

const CharacterCard = props => {
  const { name, class, league, level } = props.info;

  return (
    <article className="card charCard">
      <div className="charHeadContainer">
        <h3 className="charName">{name}</h3>
      </div>
      <ul className="charDetailsList">
        <li className="charDetail">Class: {class}</li>
        <li className="charDetail">League: {league}</li>
        <li className="charDetail">Level: {level}</li>
      </ul>
    </article>
  );
};

export default CharacterCard;