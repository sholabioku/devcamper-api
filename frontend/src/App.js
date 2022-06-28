import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
    </Router>
  );
};

export default App;
