import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { FormComponent } from './form/components/formComponent'
import { Carousel_component } from "./core/components/carrusel/Carrusel";
import { Img_statica } from './core/components/img_statica/img_statica'

function App() {
  return (
    <>
      <Carousel_component />
      <Img_statica/>
    <Router>
      <Routes>
        <Route path="/form" element={<FormComponent/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
