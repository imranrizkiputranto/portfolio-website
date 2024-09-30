import React from 'react'
import './App.css'

import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import AboutMe from './sections/AboutMe/AboutMe';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;