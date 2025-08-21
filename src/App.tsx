
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Counter from './pages/Counter'
import ToggleVisibilty from './pages/ToggleVisibilty'

function App() {
  return (
    <>
      <Navbar />
        <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/toggle-visibility" element={<ToggleVisibilty />} />
        </Routes>  
    </>
  )
}

export default App
