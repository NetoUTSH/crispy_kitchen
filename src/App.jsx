import './App.css'
import { FormComponent } from './core/calendly-form/components/FormComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ViewLandindPageComponent } from './core/landing-page/components/ViewLandingPage/ViewLandindPageComponent'
function App() {
  return (
    <>

     
    <Router>
      <Routes>
        <Route path="/form" element={<FormComponent/>}/>
        <Route path="/" element={<ViewLandindPageComponent/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
