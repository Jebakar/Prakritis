import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'animate.css';

import Header from './components/Header';
import Navbars from './components/Navbar';
import Banner from './components/Banner';
import PrakritiIntroSection from './components/Welcome';
import About from './components/About';
import Services from './components/Services';
import AppointmentSection from './components/Appointment';
import CustomerReviews from './components/CustomerReviews';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home/>
        } />
        {/* Example: If you want a separate route for Banner */}
        {/* <Route path="/banner" element={<Banner />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
