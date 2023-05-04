import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>

    </div>
  );
}

export default App;
