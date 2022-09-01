import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Contact } from './Pages/Contact';
import './App.css';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("HectorTech");

  return (
    <div className='App'>
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <div className='Navbar'>
          <Link to="/"> Home </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/contact"> Contact </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<h1>ERROR: PAGE NOT FOUND</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  )
}
export default App;
