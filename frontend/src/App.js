import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
