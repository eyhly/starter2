import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Promo from './components/Promo'
import Product from './components/Product'
import Gallery from './components/Gallery'
import data from "./data/data.json";


function App() {
  const componentsMap ={
    Home, Promo, Product, Gallery
  }

  return (
    <div className='bg-white w-full'>
      <Navbar/>
      {data.sections.map((section) => {
        const SectionComponent = componentsMap[section.component];
        return (
          <div key={section.id} id={section.id}>
            <SectionComponent />
          </div>
        );
      })}
      <Footer/>
    </div>
  )
}

export default App
