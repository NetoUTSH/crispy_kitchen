import './App.css'
import { FormComponent } from './core/calendly-form/components/FormComponent'
import { Navbar } from './core/components/navbar'
import { Footer } from './core/components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Carousel_component } from "./core/components/carrusel/Carrusel";
import { Img_statica } from './core/components/img_statica/img_statica'

function App() {
  return (
    <>
      <Navbar/>
      <Carousel_component />
      <Img_statica/>
    <Router>
      <Routes>
        <Route path="/form" element={<FormComponent/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
