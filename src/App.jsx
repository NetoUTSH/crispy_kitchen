import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { FormComponent } from './core/calendly-form/components/FormComponent'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/form" element={<FormComponent/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
