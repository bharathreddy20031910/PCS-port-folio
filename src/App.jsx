import { useState } from 'react'


import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import CardSection from './components/Cardsection'

function App() {


  return (
    <>
<Header/>
<CardSection/>
    <section id="contact" className="section scroll-mt-28">
        <Contact />
      </section>

    </>
  )
}

export default App
