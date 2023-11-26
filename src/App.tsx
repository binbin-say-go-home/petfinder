import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { PetList } from './components/petList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PetDetails } from './components/petDetails';
import { PetAdoptionForm } from './components/PetAdoptionForm';
import { JoinUs } from './components/JoinUs';
import { PetRelease } from './components/petRelease';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/details/:id" element={<PetDetails />} />
          <Route path="/adoptions/:id" element={<PetAdoptionForm />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/petRelease" element={<PetRelease />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
