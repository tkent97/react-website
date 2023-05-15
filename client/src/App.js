import Navbar from './components/navbar';
import Home from './components/home';
import LoginPage from './components/loginPage';
import { Route, Routes } from "react-router-dom";
import SignUp from './components/signUp';
import VinylDisplay from './components/vinylDisplay';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/display-vinyl/:id' element={<VinylDisplay />} />
      </Routes>

    </div>
  );
}

export default App;
