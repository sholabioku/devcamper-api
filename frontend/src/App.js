import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import AddReview from './pages/addReview/AddReview';
import Bootcamp from './pages/bootcamp/Bootcamp';
import Bootcamps from './pages/bootcamps/Bootcamps';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Reviews from './pages/reviews/Reviews';

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
          <Route path="/bootcamps/:id/reviews" element={<Reviews />} />
          <Route path="/bootcamps/:id/add-review" element={<AddReview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
