import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import CharacterCard from './CharacterCard';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedChars: false,
      characters: [],
    };
  }

  componentDidMount() {
    fetch('/api/')
      .then((res) => res.json())
      .then((characters) => {
        if (!Array.isArray(characters)) characters = [];
        return this.setState({
          characters,
          fetchedChars: true,
        });
      })
      .catch((err) =>
        console.log(
          'Characters.componentDidMount: error in getting characters, ERROR: ',
          err
        )
      );
  }

  render() {
    if (!this.state.fetchedChars) {
      return (
        <div>
          <h1>Loading character data, please wait...</h1>
        </div>
      );
    }

    const { characters } = this.state;

    if (!characters) return null;

    if (!characters.length) return <div>Sorry, no characters found</div>;

    const chars = characters.map((char, i) => {
      return <CharacterCard key={i} info={char} />;
    });

    return (
      <section className='mainSection'>
        <header className='pageHeader'>
          <h2>Characters</h2>
        </header>
        <div className='charContainer'>{chars}</div>
      </section>
    );
  }
}

export default Characters;
