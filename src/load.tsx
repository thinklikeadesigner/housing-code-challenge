import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './mockData.json';

function Load() {
  const [state, setState] = useState('idle');
  const [data, setData] = useState({});
  function clicked() {
    setState('loading');
    fetch('./mockData.json')
      .then((data) => {
        setData(data);
        setState('loaded');
      })
      .catch((err) => {
        setState('error');
      });
  }

  if (state === 'loading') {
    return <div>Loading...</div>;
  }

  if (state === 'error') {
    return <div>Error fetching your request</div>;
  }

  return (
    <div>


      <button onClick={() => clicked()}></button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default Load;
