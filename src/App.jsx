import { useState } from 'react';
import Hero from './components/Hero';
import About from "./components/About";
import NavBar from './components/NavBar';
import Features from './components/Features';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function App() {

  const handleMouse = (event) => {
    console.log(event.clientX);
    console.log(event.clientY);
  }

  useGSAP(() => {

  })

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden" onMouseMove={handleMouse}>
      {/* <p id="#para">Hi</p> */}
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
