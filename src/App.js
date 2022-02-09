import './App.css'
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Explore from './components/Explore';
import Collections from './components/Collections';


import {assets} from './components/data.js'
 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/explore" element={<Explore data={assets} />}></Route>
          <Route exact path="/collections" element={<Collections/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
