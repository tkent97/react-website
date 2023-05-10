import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import { Route, Routes } from "react-router-dom";
import SignUp from './components/signUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
