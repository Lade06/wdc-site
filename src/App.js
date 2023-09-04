
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import DashBoard from './pages/dashBoard';
import SignUp from './pages/signup';
import Computer from './pages/computer';
import Hairdressing from './pages/hairdressing';
// import Login from './pages/login';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route index element={<DashBoard />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="computer" element={<Computer />} />
          <Route path="hairdressing" element={<Hairdressing />} />

      </Routes>
     </BrowserRouter>
    
  {/* <Login /> */}
    </div>
  );
}

export default App;
