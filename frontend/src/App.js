import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Bootcamp from './pages/bootcamp/Bootcamp';
import Bootcamps from './pages/bootcamps/Bootcamps';
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
          <Route path="/bootcamps" element={<Bootcamps />} />
          <Route path="/bootcamps/:id" element={<Bootcamp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
