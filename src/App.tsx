import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './mockData.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data?.map((card: any) => (
          <li key={card.id} >
            {JSON.stringify(card.units.length)}
            <img src={card.picture} alt="pic"/><p>{card.name}</p>
            <br/>
          </li>

        ))}













        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
