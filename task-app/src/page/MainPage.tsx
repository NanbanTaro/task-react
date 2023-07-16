// PageA.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h1>PageA</h1>
      <Link to="/InputPage">Go to Input</Link>
    </div>
  );
}

export default MainPage;
