import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import NavText from './components/NavText.component'
import NavBar from './components/NavBar.component'



function Home(){
  return <h1 className='font-bold text-5xl pt-[11vh]'>Home Page</h1>
}
function About(){
  return <h1 className='pt-[11vh]'>About us</h1>
}
function Contact(){
  return <h1 className='pt-[11vh]'>Contact</h1>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      <div className='w-full h-1000 flex justify-center'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
