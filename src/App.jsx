import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormComponent } from './form/components/formComponent'
import { Carousel_component } from "./core/components/carrusel/Carrusel";
import { Img_statica } from './core/components/img_statica/img_statica'

function App() {


  return (
    <>
      <Carousel_component />
      <Img_statica/>
    </>
  )
}

export default App
