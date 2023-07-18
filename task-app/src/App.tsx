import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import InputPage from './components/InputPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">MainPage</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Input" element={<InputPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
