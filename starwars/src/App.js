import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard.js';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => setCharacterData(response.data.results))
      .catch(err => console.log(err));
  }, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="cardContainer">
        {characterData.map(data => <CharacterCard character={data} />)}
      </div>
    </div>
  );
}

export default App;
