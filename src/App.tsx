
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Counter from './pages/Counter'


function App() {
  

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      
     
    </>
  )
}

export default App
