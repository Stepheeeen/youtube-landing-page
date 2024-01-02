import React from 'react'
import './App.css'
import MainSection from './component/MainSection'
import Navbar from './component/Navbar'
import Ratings from './component/Ratings'
import GooglePartnerSection from './component/GooglePartnerSection'
import ProvigateSection from './component/ProvigateSection'
import AdvantageSection from './component/AdvantageSection'
import Footer from './component/Footer'

function App() {

  return (
   <div>
    <h1 className=''>
      <Navbar />
      <MainSection />
      <Ratings />
      <GooglePartnerSection />
      <ProvigateSection />
      <AdvantageSection />
      <Footer />
    </h1>
   </div>
  )
}

export default App
