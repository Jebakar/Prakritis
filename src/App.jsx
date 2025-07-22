import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'animate.css';
import Navbars from './components/Navbar';
import Home from './Pages/Home';
import Aboutpage from './Pages/About';
import Booking from './Pages/Booking';
import BookingPage from './components/BookingPage';
import Gender from './components/Gender';

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Aboutpage />}/>
      
        <Route path="/" element={<Home/>
        } />
        <Route path='/Booking' element={<Booking/>}/>
        {/* Example: If you want a separate route for Banner */}
        {/* <Route path="/banner" element={<Banner />} /> */}
        <Route path='/BookingPage' element={<BookingPage/>}/>
        <Route path='/Gender' element={<Gender/>}/>
        
        {/* Other components can be added here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
