import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AdminSupport from './components/SupportFiles/AdminSupport';
import UserLogin from './UserLogin';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/support" element={<AdminSupport />}></Route>
          <Route path="/*" element={<UserLogin/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}



export default App;
