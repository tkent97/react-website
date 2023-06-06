import Navbar from './components/navbar';
import Home from './components/home';
import LoginPage from './components/loginPage';
import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import SignUp from './components/signUp';
import VinylDisplay from './components/vinylDisplay';

function App() {
  const [showHelper, setShowHelper] = useState(false);

  return (
    <div className="App">
      <Navbar showHelper={showHelper} setShowHelper={setShowHelper} />
      <Routes>
        <Route path='/' element={<Home onClick={() => setShowHelper(false)} />} />
        <Route path='/login' element={<LoginPage onClick={() => setShowHelper(false)} />} />
        <Route path='/signup' element={<SignUp onClick={() => setShowHelper(false)} />} />
        <Route path='/display-vinyl/:id' element={<VinylDisplay />} />
      </Routes>

    </div>
  );
}

export default App;
