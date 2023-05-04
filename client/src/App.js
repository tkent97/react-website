import Navbar from './components/Navbar';
import Home from './components/Home';
import loginPage from './components/loginPage';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<loginPage />} />
      </Routes>

    </div>
  );
}

export default App;
