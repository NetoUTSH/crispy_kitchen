import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormComponent } from './form/components/formComponent'
import { Carousel_component } from "./core/components/carrusel/Carrusel";

function App() {


  return (
    <>
      <FormComponent/>
      <Carousel_component />
    </>
  )
}

export default App
