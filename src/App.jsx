import { useEffect } from 'react'
import './index.css'
import './animation.css'
import { initScrollAnimations } from './animations.js'


import Header from './header/header'
import About from './about/about'
import Why from './why/why'
import Stage from './stage/stage'
import Direction from './directions/directions.jsx'
import Service from './services/services'
import Contact from './contacts/contact'

export default function App() {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  return (
    <>
      <Header />
      <About />
      <Why />
      <Stage />
      <Direction />
      <Service />
      <Contact />
    </>
  )
}
