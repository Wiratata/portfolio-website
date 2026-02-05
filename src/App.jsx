// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/NavBar.component';
import Home from './components/HomePage.component';
import About from './components/About.component';
import Contact from './components/Contact.component';
import NameAnimation from "./components/NameAnimation.component.jsx";
import Portfolio from "./components/Portfolio.component.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/portfolio-website">

        <div className='w-full flex flex-col justify-center items-center'>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <NameAnimation />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;