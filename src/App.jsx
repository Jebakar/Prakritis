import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'animate.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbars from './components/Navbar';
import Home from './Pages/Home';
import Aboutpage from './Pages/About';
import Booking from './Pages/Booking';
import BookingPage from './components/BookingPage';
import Gender from './components/Gender';
import Ourteampage from './Pages/Ourteam';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import BlogList from './components/BlogList';
import Contact from './Pages/Contact';
import { Book } from 'lucide-react';
import Booked from './components/Booked';
import SlotBooking from './components/SlotBooking';
import CustomerFeedback from './components/CustomerFeedback';
import Footer from './components/Footer';
import CaseSheet from './components/CaseSheet';
import AdminAppointments from './components/AdminAppoiment';

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/team" element={<Ourteampage />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/blog" element={<BlogList />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/book" element={<Booking/>}/>
        <Route path="/" element={<Home/>
        
        } />
        <Route path='/Booking' element={<Booking/>}/>
        {/* Example: If you want a separate route for Banner */}
        {/* <Route path="/banner" element={<Banner />} /> */}
     <Route path='/CustomerFeedback' element={<CustomerFeedback/>}/>
        
        <Route path='/BookingPage' element={<BookingPage/>}/>
        <Route path='/Gender' element={<Gender/>}/>
          <Route path='/slotbooking' element={<SlotBooking/>}/>
        <Route path='/CaseSheet' element={<CaseSheet/>}/>
        <Route path='/AdminAppointments' element={<AdminAppointments/>}/>
        {/* Other components can be added here as needed */}
      </Routes>
       <div data-aos="fade-up" data-aos-delay="300">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
