import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormComponent } from './form/components/formComponent'
import Card from './core/components/card/cardComponet'

function App() {


  return (
    <>
      <FormComponent/>
      <Card/>

    </>
  )
}

export default App
