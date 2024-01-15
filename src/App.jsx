import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {Home, About, Products, Help, ProductDetail } from './Pages/index.js'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/aboutus" element={<About />} />
        <Route  path="/products" element={<Products />} />
        <Route  path="/help" element={<Help />} />
        <Route  path="/productdetail/:id" element={<ProductDetail />} />
      </Routes>
       
      </Router>
    </>
  )
}

export default App
