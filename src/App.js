import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Education from './components/pages/Education';
import Employment from './components/pages/Employment';
import Hobbies from './components/pages/Hobbies';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      {/* <video autoPlay muted loop id='myVideo'>
        <source src='http://10.0.0.19:8080/Type.mp4' type='video/mp4' />
      </video> */}
      <img src="My-Portfolio/src/images/code.jpg" alt="Background" id='myBackground' />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
