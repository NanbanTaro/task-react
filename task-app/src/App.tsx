// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import InputPage from './InputPage';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <h1>MainPage</h1>
//       <Router>
//         <Switch>
//           <Route exact path="/InputPage">
//             <InputPage />
//           </Route>
//         </Switch>
//       </Router>
//     </div>

//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './page/MainPage';
import InputPage from './page/InputPage';

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
          <Route path="/InputPage" element={<InputPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
